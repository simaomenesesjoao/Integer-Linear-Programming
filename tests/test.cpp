#include <iostream>
#include "lp/lp.h"
#include "lp/ilp.h"
#include "lp/highs_interface.h"
#include "lp/brute_force.h"
#include <Eigen/Dense>
#include <catch2/catch_test_macros.hpp>
#include <random>


inline bool is_equal(double x, double y){
    return std::abs(x-y) < tol;
}

inline bool is_equal(const Eigen::VectorXd& x, const Eigen::VectorXd& y){
    return is_equal((x-y).norm(), 0);
}

inline bool is_equal(const Eigen::VectorXi& x, const Eigen::VectorXi& y){
    return is_equal((x-y).norm(), 0);
}


struct RandomILP {
    Constraints constraints;
    Eigen::VectorXd cost;
    Eigen::VectorXi witness; // known feasible point
    int ub_hint;
};

RandomILP make_random_feasible_equalities(
    std::mt19937& rng,
    int n_vars = 5,
    int n_eq   = 4,
    int coeff_abs_max = 6,   // keep small for brute force
    int x_max = 8,           // witness entries in [0..x_max]
    int cost_abs_max = 10
) {
    std::uniform_int_distribution<int> xdist(0, x_max);
    std::uniform_int_distribution<int> cdist(-cost_abs_max, cost_abs_max);
    std::uniform_int_distribution<int> adist(-coeff_abs_max, coeff_abs_max);

    Eigen::VectorXi x_star(n_vars);
    for (int i = 0; i < n_vars; ++i) x_star(i) = xdist(rng);

    // Build random A with small ints (avoid all-zero rows)
    std::vector<std::vector<double>> Arows;
    Arows.reserve(n_eq + 1);

    for (int r = 0; r < n_eq; ++r) {
        std::vector<double> row(n_vars);
        while (true) {
            int nnz = 0;
            for (int j = 0; j < n_vars; ++j) {
                int a = adist(rng);
                // bias toward sparse-ish rows
                if (std::uniform_int_distribution<int>(0, 3)(rng) == 0) a = 0;
                row[j] = (double)a;
                if (a != 0) nnz++;
            }
            if (nnz > 0) break;
        }
        Arows.push_back(row);
    }

    Constraints constraints;
    constraints.reserve(n_eq + 1);

    // Turn into equalities with lo == hi == b
    for (int r = 0; r < n_eq; ++r) {
        double b = 0.0;
        for (int j = 0; j < n_vars; ++j) b += Arows[r][j] * (double)x_star(j);

        // keep numbers moderate (you asked "up to 20" earlier; for stress tests, moderate helps)
        // If you really need <=20, tighten coeff_abs_max/x_max.
        constraints.push_back({b, Arows[r], b});
    }

    // Add a bounding equality to keep brute force finite: sum x_i = sum(x*_i)
    // (still allows many solutions if other eqs are not full rank)
    {
        std::vector<double> row(n_vars, 1.0);
        double b = (double)x_star.sum();
        constraints.push_back({b, row, b});
    }

    Eigen::VectorXd cost(n_vars);
    for (int i = 0; i < n_vars; ++i) {
        int c = cdist(rng);
        if (c == 0) c = 1; // avoid too many ties
        cost(i) = (double)c;
    }

    // A safe brute-force box upper bound is the sum constraint RHS
    int ub_hint = (int)x_star.sum(); // since x_i >= 0 and sum x_i fixed

    return {constraints, cost, x_star, ub_hint};
}



// TEST_CASE("Gaussian elimination", "[matrix]") {
//     Matrix matrix(3, 4);
//     matrix << 1.0, 2.0, -3.0,  0.0, 
//               0.0, 1.0,  2.0, -1.0, 
//              -3.0, 1.5,  0.0, -4.0;

//     gaussian_elimination(matrix, 2, 1);
//     REQUIRE(is_equal(matrix(0, 0), 5.0));
// }

// TEST_CASE("Pivoting", "[matrix]") {
//     Matrix matrix(3, 4);
//     matrix << 1.0, 2.0, -3.0,  0.0, 
//               0.0, 1.0,  2.0,  1.0, 
//              -3.0, 1.5,  0.0, -4.0;

//     Tableau tableau(matrix, 2, 3, 0);
//     bool success = tableau.simplex_pivot(1);
//     std::cout << success << "\n";
//     std::cout << tableau << "\n";
// }


// TEST_CASE("Build tableau", "[simplex]") {


//     Constraints constraints;
//     constraints.push_back({1.0, {1.0, 0.0}, 4.0});
//     constraints.push_back({2.0, {0.0, 1.0}, 5.5});

//     VectorD cost(2);
//     cost << 1.0, 1.0;
    
//     Tableau tableau = build_tableau(constraints, cost);
//     std::cout << tableau << "\n";
// }


// TEST_CASE("Pivot to feasible", "[simplex]") {

//     Constraints constraints;
//     constraints.push_back({1.0, {1.0, 0.0}, 4.0});
//     constraints.push_back({2.0, {0.0, 1.0}, 5.5});

//     VectorD cost(2);
//     cost << 1.0, 1.0;
    
//     Tableau tableau = build_tableau(constraints, cost);
//     pivot_into_feasible(tableau);
// }

// TEST_CASE("Simplex", "[simplex]") {

//     Constraints constraints;
//     constraints.push_back({1.0, {1.0, 0.0}, 4.0});
//     constraints.push_back({2.0, {0.0, 1.0}, 5.5});

//     VectorD cost(2);
//     cost << 1.0, 1.0;
    
//     solve_lp(constraints, cost);
// }

TEST_CASE("Maximize in a square", "[simplex]") {
    SECTION("Given a square region"){
        /* Region:
         ___  
        |   |  1 <= x <= 4
        |   |  2 <= y <= 5.5
        |___|  
        */

        unsigned int cols = 2;

        Constraints constraints;
        constraints.push_back({1.0, {1.0, 0.0}, 4.0});
        constraints.push_back({2.0, {0.0, 1.0}, 5.5});

        SECTION("when the cost increases as x+y"){

            Eigen::VectorXd cost(cols);
            cost << 1.0, 1.0;
            
            const auto sol = solve_lp(constraints, cost);

            Eigen::VectorXd solution(cols);
            solution << 4.0, 5.5;

            REQUIRE(sol);
            REQUIRE(is_equal(sol->cost, 9.5));            
            REQUIRE(is_equal(sol->coordinates, solution));
        }

        SECTION("when the cost increases as -x+y"){

            Eigen::VectorXd cost(cols);
            cost << -1.0, 1.0;
            
            const auto sol = solve_lp(constraints, cost);

            Eigen::VectorXd solution(cols);
            solution << 1.0, 5.5;
            
            REQUIRE(sol);
            REQUIRE(is_equal(sol->cost, 4.5));
            REQUIRE(is_equal(sol->coordinates, solution));
        }

        SECTION("when the cost only depends on y"){

            Eigen::VectorXd cost(cols);
            cost << 0.0, 1.0;
            
            const auto sol = solve_lp(constraints, cost);
            
            REQUIRE(sol);
            REQUIRE(is_equal(sol->cost, 5.5));
        }
    }
}


TEST_CASE("Impossible square", "[simplex]") {
    SECTION("Given an impossible region"){
        // Region: 5 <= x+y <= 4

        unsigned int cols = 2;

        Constraints constraints;
        constraints.push_back({5.0, {1.0, 0.0}, 4.0});
        

        SECTION("when the cost increases as x+y"){

            Eigen::VectorXd cost(cols);
            cost << 1.0, 1.0;
            
            const auto sol = solve_lp(constraints, cost);

            REQUIRE(!sol);
        }
    }
}

TEST_CASE("Unbounded LP", "[simplex]") {
    SECTION("Given an unbounded region"){

        unsigned int cols = 2;

        Constraints constraints;
        constraints.push_back({1.0, {0.0, 1.0}, std::nullopt});
        constraints.push_back({1.0, {1.0, 0.0}, std::nullopt});

        SECTION("when the cost vector points in the unbounded direction"){
            Eigen::VectorXd cost(cols);
            cost << 1.0, 1.0;

            const auto sol = solve_lp(constraints, cost);

            REQUIRE(!sol);
        }


        SECTION("when the cost vector points in the bounded direction"){
            Eigen::VectorXd cost(cols);
            cost << -1.0, -1.0;

            const auto sol = solve_lp(constraints, cost);

            Eigen::VectorXd solution(cols);
            solution << 1.0, 1.0;

            REQUIRE(sol);
            REQUIRE(is_equal(sol->cost, -2.0));
            REQUIRE(is_equal(sol->coordinates, solution));
        }
       
    }
}

TEST_CASE("Minimization in a trapezoid", "[simplex]") {

    /* Region:
       |\     3 <= x+y <= 5
       | \    x >= 1
       |  \   y >= 1
       \___\
    Objective: minimize 2x + y 
    */

    unsigned int cols = 2;

    Constraints constraints;
    constraints.push_back({3.0, {1.0, 1.0}, 5});
    constraints.push_back({1.0, {1.0, 0.0}, std::nullopt});
    constraints.push_back({1.0, {0.0, 1.0}, std::nullopt});

    Eigen::VectorXd cost(cols);
    cost << -2.0, -1.0;
    
    const auto sol = solve_lp(constraints, cost);

    Eigen::VectorXd solution(cols);
    solution << 1.0, 2.0;
    
    REQUIRE(sol);
    REQUIRE(is_equal(sol->cost, -4.0));
    REQUIRE(is_equal(sol->coordinates, solution));
}

TEST_CASE("Minimization in a polygon", "[simplex]") {
    /* Region:
        1 <= x+y
        2x-y <= 1
        3y <= 2

        Objective: maximize 6x + 3y
    */

    SECTION("Given an unbounded region"){
        unsigned int cols = 2;

        Constraints constraints;
        constraints.push_back({1.0, {1.0, 1.0}, std::nullopt});
        constraints.push_back({std::nullopt, {2.0, -1.0}, 1.0});
        constraints.push_back({std::nullopt, {0.0, 3.0}, 2.0});


        SECTION("when the cost function is 6x + 3y"){

            Eigen::VectorXd cost(cols);
            cost << 6.0, 3.0;
            const auto sol = solve_lp(constraints, cost);

            Eigen::VectorXd solution(cols);
            solution << 5.0/6.0, 2.0/3.0;

            REQUIRE(sol);
            REQUIRE(is_equal(sol->cost, 7));
            REQUIRE(is_equal(sol->coordinates, solution));
        }
    }
}


TEST_CASE("Minimization in a point", "[simplex]") {
    /* Region:
     {{2, 3} <= 13.2, {3, 2} <= 13.4, 4 <= {1, 0} <= 4, {0, 1} <= 0}
    */

    SECTION("Given a point region"){
        unsigned int cols = 2;

        Constraints constraints;
        constraints.push_back({std::nullopt, {2.0, 3.0}, 13.2});
        constraints.push_back({std::nullopt, {3.0, 2.0}, 13.4});
        constraints.push_back({4.0, {1.0, 0.0}, 4.0});
        constraints.push_back({std::nullopt, {0.0, 1.0}, 0.0});

        SECTION("when the cost function is 6x + 3y"){

            Eigen::VectorXd cost(cols);
            cost << 1.1, 1.0;
            const auto sol = solve_lp(constraints, cost);

            REQUIRE(sol);
        }
    }
}


// TEST_CASE("Maximization with equality constraints", "[ilp]") {

//     SECTION("Given a point region"){
//         unsigned int cols = 3;

//         Constraints constraints;
//         constraints.push_back({4.0, {1.0, 1.0, 0.0}, 4.0});
//         constraints.push_back({5.0, {1.0, 0.0, 1.0}, 5.0});

//         SECTION("when the cost function is 6x + 3y"){

//             Eigen::VectorXd cost(cols);
//             cost << 1.1, 1.0, 0.9;
//             const auto sol = optimize_ilp(constraints, cost);

//             REQUIRE(sol);
//         }
//     }
// }



// TEST_CASE("Maximization integer", "[simplex][ilp]") {
//     /* Region:
//         1 <= x+y <= 5

//         Objective: maximize 6x + 3y
//     */

//     SECTION("Given an bounded region"){
//         unsigned int cols = 2;

//         Constraints constraints;
//         constraints.push_back({1.0, {1.0, 1.0}, 5.0});

//         Eigen::VectorXd cost(cols);
//         cost << 6.0, 3.0;

//         const auto sol = optimize_ilp(constraints, cost);

//         REQUIRE(sol);
        
//     }
// }




// TEST_CASE("Maximization integer in fractional case", "[simplex][ilp]") {
 
//     SECTION("Given a bounded region"){
//         unsigned int cols = 2;

//         Constraints constraints;
//         constraints.push_back({std::nullopt, {2.0, 1.0}, 7.0});
//         constraints.push_back({std::nullopt, {0.0, 1.0}, 4.0});

//         Eigen::VectorXd cost(cols);
//         cost << 1.0, 1.1;

//         const auto sol = optimize_ilp(constraints, cost);
    
//         Eigen::VectorXi solution(cols);
//         solution << 1, 4;
        
//         REQUIRE(sol);
//         REQUIRE(is_equal(solution, sol->coordinates));
//     }
// }




// TEST_CASE("Maximization integer in double fractional case", "[simplex][ilp]") {
 
//     SECTION("Given a bounded region"){
//         unsigned int cols = 2;

//         Constraints constraints;
//         constraints.push_back({std::nullopt, {2.0, 1.0}, 5.0});
//         constraints.push_back({std::nullopt, {1.0, 2.0}, 5.0});

//         Eigen::VectorXd cost(cols);
//         cost << 1.0, 1.1;

//         const auto sol = optimize_ilp(constraints, cost);
    
//         Eigen::VectorXi solution(cols);
//         solution << 1, 2;
        
//         REQUIRE(is_equal(solution, sol->coordinates));
//     }
// }


// TEST_CASE("ILP requires >1 branch", "[simplex][ilp]") {
//     unsigned int cols = 2;

//     Constraints constraints;
//     constraints.push_back({std::nullopt, {2.0, 3.0}, 13.2}); // 2x + 3y <= 13.2
//     constraints.push_back({std::nullopt, {3.0, 2.0}, 13.4}); // 3x + 2y <= 13.4

//     Eigen::VectorXd cost(cols);
//     cost << 1.1, 1.0; // max 1.1*x + 1.0*y

//     const auto sol = optimize_ilp(constraints, cost);

//     Eigen::VectorXi solution(cols);
//     solution << 3, 2; // or (2,3) depending on tie-break

//     REQUIRE(sol);
//     REQUIRE(is_equal(solution, sol->coordinates));
// }

// TEST_CASE("Equalities", "[simplex][ilp]") {
//     unsigned int cols = 3;

//     // y + z = 3
//     // x + y = 4
//     // (4-t, t, 3-t) -> 1,3,0
//     Constraints constraints;
//     constraints.push_back({3,  { 0, 1, 1}, 3});
//     constraints.push_back({4, { 1, 1, 0}, 4});

//     Eigen::VectorXd cost(cols);
//     cost << -1.0, -1.0, -1.0; // minimize sum of variables

//     const auto sol = optimize_ilp(constraints, cost);
//     const auto sol2 = brute_force_maximize_equalities(constraints, cost);

//     REQUIRE(sol.exists);
//     REQUIRE(sol2.exists);
//     REQUIRE(is_equal(sol.cost, sol2.cost));
// }


// TEST_CASE("Equalities2", "[simplex][ilp]") {
//     unsigned int cols = 5;

//     // Picked solution x = (6, 4, 8, 3, 7)
//     Constraints constraints;
//     constraints.push_back({10, { 1, 1, 0, 0, 0}, 10});  // 6 + 4
//     constraints.push_back({12, { 0, 1, 1, 0, 0}, 12});  // 4 + 8
//     constraints.push_back({11, { 0, 0, 1, 1, 0}, 11});  // 8 + 3
//     constraints.push_back({10, { 0, 0, 0, 1, 1}, 10});  // 3 + 7
//     constraints.push_back({13, { 1, 0, 0, 0, 1}, 13});  // 6 + 7

//     Eigen::VectorXd cost(5);
//     cost << 7.0, 3.0, 5.0, 2.0, 6.0;

//     const auto sol = optimize_ilp(constraints, cost);
//     const auto sol2 = brute_force_maximize_equalities(constraints, cost);
    
//     REQUIRE(sol.exists);
//     REQUIRE(sol2.exists);
//     REQUIRE(is_equal(sol.cost, sol2.cost));
// }


// TEST_CASE("Equalities3", "[simplex][ilp]") {
//     unsigned int cols = 5;

//     Constraints constraints;
        
//     constraints.push_back({12, { 1, 1, 1, 0, 0 }, 12});
//     constraints.push_back({10, { 0, 0, 1, 1, 1 }, 10});
//     constraints.push_back({ 9, { 1, 0, 0, 0, 1 },  9});
//     constraints.push_back({ 7, { 0, 1, 0, 1, 0 },  7});
//     Eigen::VectorXd cost(5);
//     cost << 4.0, 1.0, 3.0, 2.0, 5.0;

//     const auto sol = optimize_ilp(constraints, cost);
//     const auto sol2 = brute_force_maximize_equalities(constraints, cost);
    
//     REQUIRE(sol.exists);
//     REQUIRE(sol2.exists);
//     REQUIRE(is_equal(sol.cost, sol2.cost));
// }

// TEST_CASE("Equalities4", "[simplex][ilp]") {
//     unsigned int cols = 5;

//     Constraints constraints;    
//     constraints.push_back({2, { 1, 1, 1, 0, 0 }, 2});
//     constraints.push_back({2, { 1, 1, 0, 1, 0 }, 2});
//     constraints.push_back({1, { 0, 0, 1, 1, 1 }, 1});
//     Eigen::VectorXd cost(5);
//     cost << 0.0, 0.0, 1.0, 1.0, 0.0;

//     const auto sol = optimize_ilp(constraints, cost);
//     const auto sol2 = brute_force_maximize_equalities(constraints, cost);
    
//     REQUIRE(sol.exists);
//     REQUIRE(sol2.exists);
//     REQUIRE(is_equal(sol.cost, sol2.cost));
// }

// TEST_CASE("Equalities5", "[simplex][ilp]") {
//     unsigned int cols = 13;

//     Constraints constraints;    
        
//     constraints.push_back({69, {0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0}, 69});
//     constraints.push_back({76, {0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0}, 76});
//     constraints.push_back({81, {1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0}, 81});
//     constraints.push_back({72, {0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0}, 72});
//     constraints.push_back({49, {1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1}, 49});
//     constraints.push_back({58, {0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0}, 58});
//     constraints.push_back({6,  {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1}, 6});
//     constraints.push_back({51, {1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1}, 51});
//     constraints.push_back({46, {0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0}, 46});
//     constraints.push_back({40, {1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1}, 40});

//     Eigen::VectorXd cost = -Eigen::VectorXd::Ones(cols);

//     const auto sol = optimize_ilp(constraints, cost);
//     const auto sol2 = optimize_ilp_highs(constraints, cost);
    
//     REQUIRE(sol.exists);
//     REQUIRE(sol2.exists);
//     REQUIRE(is_equal(sol.cost, sol2.cost));
// }



// TEST_CASE("Randomized many equalities", "[simplex][ilp]") {
  
//     std::mt19937 rng(1);

//     for (int t = 1; t <= 20; ++t) {
//         auto inst = make_random_feasible_equalities(rng);

//         // Solve with brute force (ground truth for small bounded problems)
//         auto sol2 = brute_force_maximize_equalities(inst.constraints, inst.cost,
//                                                      /*default_ub=*/inst.ub_hint,
//                                                      /*infer_ubs=*/false);

//         // Solve with your ILP solver
//         auto sol = optimize_ilp(inst.constraints, inst.cost);

//         REQUIRE(sol.exists);
//         REQUIRE(sol.coordinates == sol2.coordinates);
//     }
// }


