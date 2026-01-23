#include <iostream>
#include "lp/lp2.h"
#include <catch2/catch_test_macros.hpp>


TEST_CASE("Gaussian elimination", "[matrix]") {
    Matrix matrix(3, 4);
    matrix << 1.0, 2.0, -3.0,  0.0, 
              0.0, 1.0,  2.0, -1.0, 
             -3.0, 1.5,  0.0, -4.0;

    gaussian_elimination(matrix, 2, 1);
    REQUIRE(is_equal(matrix(0, 0), 5.0));
}

TEST_CASE("Pivoting", "[matrix]") {
    Matrix matrix(3, 4);
    matrix << 1.0, 2.0, -3.0,  0.0, 
              0.0, 1.0,  2.0,  1.0, 
             -3.0, 1.5,  0.0, -4.0;

    Tableau tableau(matrix, 2, 3, 0);
    bool success = tableau.simplex_pivot(1);
    std::cout << success << "\n";
    std::cout << tableau << "\n";
}


TEST_CASE("Build tableau", "[simplex]") {


    Constraints constraints;
    constraints.push_back({1.0, {1.0, 0.0}, 4.0});
    constraints.push_back({2.0, {0.0, 1.0}, 5.5});

    VectorD cost(2);
    cost << 1.0, 1.0;
    
    Tableau tableau = build_tableau(constraints, cost);
    std::cout << tableau << "\n";
}


TEST_CASE("Pivot to feasible", "[simplex]") {

    Constraints constraints;
    constraints.push_back({1.0, {1.0, 0.0}, 4.0});
    constraints.push_back({2.0, {0.0, 1.0}, 5.5});

    VectorD cost(2);
    cost << 1.0, 1.0;
    
    Tableau tableau = build_tableau(constraints, cost);
    pivot_into_feasible(tableau);
}

TEST_CASE("Simplex", "[simplex]") {

    Constraints constraints;
    constraints.push_back({1.0, {1.0, 0.0}, 4.0});
    constraints.push_back({2.0, {0.0, 1.0}, 5.5});

    VectorD cost(2);
    cost << 1.0, 1.0;
    
    solve_lp(constraints, cost);
}