#include <iostream>
#include "lp/lp.h"
#include "lp/utils.h"

std::ostream& operator<<(std::ostream& stream, const Constraint& constraint){
    
    if(constraint.smallest){
        stream << *constraint.smallest << " <= ";
    }

    if(constraint.smallest || constraint.largest){
        stream << constraint.row;
    }

    if(constraint.largest){
        stream << " <= " << *constraint.largest;
    }

    return stream;
}

bool is_equal(double x, double y){
    return std::abs(x-y) < tol;
}

bool is_equal(const Eigen::VectorXd& x, const Eigen::VectorXd& y){
    return is_equal((x-y).norm(), 0);
}

bool is_equal(const Eigen::VectorXi& x, const Eigen::VectorXi& y){
    return is_equal((x-y).norm(), 0);
}







Eigen::MatrixXd add_slack(const Constraints& constraints, const Eigen::VectorXd& cost){

    if(DEBUG > 1){
        std::cout << "LP: Getting number of variables\n";
    }

    unsigned int num_vars = cost.size();
    unsigned int num_constraints = 0;
    for(const auto& [lowest, row, highest]: constraints){
        if(highest){
            num_constraints++;
        }
        if(lowest){
            num_constraints++;
        }
    }

    if(DEBUG > 1){
        std::cout << "LP: " << num_vars << " " << num_constraints << "\n";
    }
    
    Eigen::MatrixXd A = Eigen::MatrixXd::Zero(num_constraints+1, num_constraints + num_vars + 1);

    if(DEBUG > 1){
        std::cout << "LP: Setting matrix\n";
    }

    unsigned int constraint = 0;
    unsigned int row_index = 0;
    for(unsigned int i=0; i<constraints.size(); i++){

        if(DEBUG > 1){
            std::cout << "Row index: " << i << "\n";
        }

        const auto& [lowest, row, highest] = constraints.at(i);

        if(highest){

            if(DEBUG > 1){
                std::cout << "Highest\n";
            }
            
            for(unsigned col_index=0; col_index<num_vars; col_index++){
                A(row_index, col_index) = row.at(col_index);
            }

            // Slack variable
            A(row_index, num_vars + row_index) = 1.0;

            // RHS
            A(row_index, num_vars + num_constraints) = *highest;

            row_index++;
        }

        if(lowest){

            if(DEBUG > 1){
                std::cout << "lowest\n";
            }
            
            for(unsigned col_index=0; col_index<num_vars; col_index++){
                A(row_index, col_index) = -row.at(col_index);
            }

            // Slack variable
            A(row_index, num_vars + row_index) = 1.0;


            if(DEBUG > 1){
                std::cout << "LP: RHS\n";
            }
            
            // RHS
            A(row_index, num_vars + num_constraints) = -*lowest;

            row_index++;
        }
    }


    for(unsigned int i=0; i<num_vars; i++){
        A(num_constraints, i) = cost(i);
    }

    if(DEBUG > 2){
        std::cout << "Matrix with slack variables:\n" << A << "\n";
    }
    
    return A;
}

std::optional<std::pair<Eigen::MatrixXd, std::vector<unsigned int>>> solve_lp(
    const Eigen::MatrixXd& A,
    std::vector<unsigned int> pivots, 
    unsigned int num_constraints, 
    unsigned int cost_row, 
    bool pivot_out_artificial){

    if(DEBUG > 1){
        std::cout << "LP: Entering solve_lp for matrix\n" << A << "\n";
        std::cout << "LP: pivots: " << pivots << "\n";
    }

    auto B = A;
    unsigned int rows = B.rows();
    unsigned int cols = B.cols();
    unsigned int num_variables = cols - 1;

    unsigned int timeout = 4000;
    while(--timeout > 0){

        if(DEBUG > 1){
            std::cout << "LP: New pivot iteration\n";
        }        

        // Find largest non-negative element in the cost function
        double highest = -1.0;
        int max_col = -1;
        for(int col=0; col<num_variables; col++){
            double b = B(cost_row, col);
            if(b > tol && b > highest){
                highest = b;
                max_col = col;
            }
        }

        if(DEBUG > 1){
            std::cout << "LP: Cost row: " << B.row(cost_row) << " | largest: " << highest << " | col index: " << max_col << " \n";
        }

        // Algorithm complete
        if(max_col == -1){

            if(DEBUG > 1){
                std::cout << "LP: Cannot improve cost more\n";
            }

            break;
        }

        // Find the first restriction violated from increasing this variable
        int max_row = -1;
        double lowest_ratio = -tol;
        for(int row=0; row<num_constraints; row++){
            double b = B(row, max_col);
            double c = B(row, num_variables);

            if(c < -tol || b < tol){
                continue;
            }

            if(c/b < lowest_ratio || lowest_ratio == -tol){
                lowest_ratio = c/b;
                max_row = row;
            }
        }
        
        if(max_row == -1){
            if(DEBUG > 1){
                std::cout << "LP: Pivot row could not be found.\n";
            }
            return std::nullopt;

        }

        if(DEBUG > 1){
            std::cout << "LP: Pivot row: " << B.row(max_row) << "\n";
            std::cout << "LP: Pivoting around (" << max_row << ", " << max_col << ")\n";
        }
        pivots[max_row] = max_col;

        // Update the matrix
        B.row(max_row) /= B(max_row, max_col);
        for(unsigned int j=0; j<rows; j++){
            if(j == max_row){
                continue;
            }
            B.row(j) -= B(j, max_col)*B.row(max_row);
        }

        if(DEBUG > 1){
            std::cout << "LP: New matrix:\n" << B << "\n";
            std::cout << "LP: pivots: " << pivots << "\n";
        }

    }
    
    // No solution found
    if(timeout <= 0){
        if(DEBUG > 1){
            std::cout << "Timeout reached.\n";
        }
        return std::nullopt;
    }


    if(DEBUG > 1){
        std::cout << "LP: final matrix:\n" << B << "\n";
        std::cout << "LP: pivots: " << pivots << "\n";
    }


    unsigned int num_nonartificial = num_variables - num_constraints;

    if(pivot_out_artificial && !is_equal(B(B.rows()-1, B.cols()-1), 0.0) ){
        return std::nullopt;
    }

    if(pivot_out_artificial){

        if(DEBUG > 1){
            std::cout << "LP: Pivoting out artificial\n";
        }

        for(unsigned int i=0; i<pivots.size(); i++){

            // If i is artificial
            if(pivots.at(i) >= num_nonartificial){

                if(DEBUG > 1){
                    std::cout << "LP: basis variable " << i << " is artificial. It needs to be pivoted out.\n";
                }

                // Find the variable to pivot onto
                const auto row = B.row(i);
                for(unsigned int col=0; col<num_nonartificial; col++){
                    if(std::abs(row(col)) > tol){

                        // Make sure that the variable pivoted-to is not already in the basis
                        if(std::find(pivots.begin(), pivots.end(), col) != pivots.end()){
                            continue;
                        }
               
                        if(DEBUG > 1){
                            std::cout << "LP: basis variable " << i << " will be swapped with " << col << "\n";
                        }

                        // Update the matrix
                        B.row(i) /= B(i, col);
                        for(unsigned int j=0; j<rows; j++){
                            if(j == i){
                                continue;
                            }
                            B.row(j) -= B(j, col)*B.row(i);
                        }

                        pivots.at(i) = col;
                            
                        break;
                    }
                }
            }            
        }

    }
    

    if(DEBUG > 1){
        std::cout << "LP: matrix after removing artificial:\n" << B << "\n";
        std::cout << "LP: pivots: " << pivots << "\n";
    }

    return std::pair<Eigen::MatrixXd, std::vector<unsigned int>>{B, pivots};
}

Eigen::MatrixXd remove_artificial(const Eigen::MatrixXd& A, const unsigned int num_vars, const unsigned int num_constraints){

    Eigen::MatrixXd B = Eigen::MatrixXd::Zero(num_constraints+1, num_vars + num_constraints+1);

    // Constraints + objective row
    B.block(0, 0, num_constraints+1, num_vars + num_constraints) = A.block(0, 0, num_constraints+1, num_vars + num_constraints);

    B.block(0, num_vars + num_constraints, num_constraints+1,1) = A.block(0,num_vars + num_constraints*2,num_constraints+1,1);

    return B;

}

Eigen::MatrixXd add_artificial(const Eigen::MatrixXd& A){
    // Given A*x = b and x > 0 such that x contains slack variables, add artificial
    // variables and minimize their sum

    const unsigned int cols = A.cols()-1;
    const unsigned int rows = A.rows()-1;

    const Eigen::VectorXd cost = A.row(rows);    

    Eigen::MatrixXd B = Eigen::MatrixXd::Zero(rows+2, rows+cols+1);

    B.block(0,0,rows,cols) = A.block(0,0,rows, cols); // constraints
    B.block(0,cols+rows,rows,1) = A.block(0,cols,rows,1); // b

    for(unsigned int row=0; row<rows; row++){
        if(B(row, rows+cols) < 0) {
            B.row(row) *= -1;
        }
    }
    
    B.block(rows, 0, 1, cols) = A.block(rows, 0, 1, cols);
    B(rows+1, cols+rows) = A(rows,cols);

    for(unsigned int row=0; row<rows; row++){
        B.row(rows+1) += B.row(row);
        B(row,row+cols) += 1.0; // artificial variables
    }
    
    if(DEBUG > 2){
        std::cout << "Matrix with artificial variables:\n" << B << "\n";
    }

    return B;
}

Eigen::VectorXd get_sol_coordinates(
    const Eigen::MatrixXd& A, 
    const std::vector<unsigned int>& pivots){
        
    const unsigned int num_constraints = A.rows() - 1;
    const unsigned int num_vars = A.cols() - 1;

    Eigen::VectorXd coordinates = Eigen::VectorXd::Zero(num_vars);

    for(unsigned int i=0; i<num_constraints; i++){
        coordinates[pivots[i]] = A(i, num_vars);        
    }

    return coordinates;
}

Solution optimize(const Constraints& constraints, const Eigen::VectorXd& cost){

    // The constraints are inequalities. 
    // They need to be converted to equalities through slack variables A*x = b
    const Eigen::MatrixXd A = add_slack(constraints, cost);

    // At this point, it is not yet known whether the LP is feasible, so we
    // add artificial variables and minimize (Phase 1 LP)
    const Eigen::MatrixXd B = add_artificial(A);

    const unsigned int num_constraints = B.rows() - 2;
    const unsigned int num_vars = cost.size();
    const unsigned int cost_row = B.rows() - 1;
    
    // keep track of the pivots
    std::vector<unsigned int> pivots(num_constraints, 0);
    for(unsigned int i=0; i<num_constraints; i++){
        pivots[i] = B.cols()-1-num_constraints+i;
    }

    const auto maybe_C = solve_lp(B, pivots, num_constraints, cost_row, true);

    if(!maybe_C){
        return {{}, {}, false};
    }
    
    const auto& C = maybe_C->first;

    // If the cost function is not zero, a feasible region could not be found
    if(std::abs(C(C.rows()-1, C.cols()-1)) > tol){
        
        if(DEBUG > 2){
            std::cout << "LP: Feasible region could not be found in phase 1\n";
        }
        
        return {{}, {}, false};
    }

    const auto CC = remove_artificial(C, num_vars, num_constraints);

    const auto maybe_D = solve_lp(CC, maybe_C->second, num_constraints, cost_row-1);
    
    if(!maybe_D){
        return {{}, {}, false};
    }
    const auto& D = maybe_D->first;

    const auto coordinates = get_sol_coordinates(D, maybe_D->second);

    Eigen::VectorXd orig_coordinates(num_vars);
    orig_coordinates = coordinates.segment(0,num_vars);

    if(DEBUG > 1){
        std::cout << "coordinates: " << coordinates.transpose() << "\n";
    }    

    return {orig_coordinates, -D(D.rows()-1, D.cols()-1), true};    
}

class Bounds {

public:
    Bounds(unsigned int size): size_{size}{

        std::vector<double> coordinates = std::vector<double>(size);

        for(unsigned int i=0; i<size; i++){
            coordinates[i] = 1.0;
            constraints_.push_back({std::nullopt, coordinates, std::nullopt});
            coordinates[i] = 0.0;
        }
    }

    void update_bounds(const Constraint& constraint, unsigned int i){
        constraints_[i] = constraint;
    }

    std::vector<Constraint> get_bounds_as_constraints() const {
        std::vector<Constraint> out;
        for(const auto& constraint: constraints_){
            if(constraint.smallest || constraint.largest){
                out.push_back(constraint);            
            }
        }
        return out;
    }

    friend std::ostream& operator<<(std::ostream& stream, const Bounds& bounds){
        
        for(const auto& constraint: bounds.constraints_){
            
            if(constraint.smallest || constraint.largest){
                stream << constraint << ", ";
            }
        }

        return stream;
    }

    std::vector<Constraint> constraints_;
private:
    unsigned int size_;

};

bool is_integer(double x, double eps = 1e-9) {
    return std::abs(x - std::round(x)) <= eps;
}

std::optional<unsigned int> find_first_fractional(const Eigen::VectorXd& coordinates){
    for(unsigned int i=0; i<coordinates.size(); i++){
        double coord = coordinates(i);

        if(!is_integer(coord)){
            return i;
        }
    }

    return std::nullopt;
}



std::optional<Eigen::VectorXi> convert_to_int(const Eigen::VectorXd& coordinates){
    
    Eigen::VectorXi int_coords = Eigen::VectorXi::Zero(coordinates.size());

    for(unsigned int i=0; i<coordinates.size(); i++){
        double coord = coordinates(i);
        int int_part = std::round(coord);

        if(!is_equal(coord, (double)int_part)){
            return std::nullopt;
        } 
        int_coords(i) = int_part;
    }

    return int_coords;
}



SolutionI optimize_ilp(const Constraints& constraints, const Eigen::VectorXd& cost){
    if(DEBUG_ILP){
        std::cout << "-------- Starting optimize_ILP ------------- \n";
    }

    unsigned int num_vars = cost.size();
    Bounds original_bounds(num_vars);

    std::vector<Bounds> bounds_vector{original_bounds};
    
    double best_cost = -1e40;
    bool sol_exists = false;
    Eigen::VectorXi solution_coords = Eigen::VectorXi::Zero(num_vars);

    int timeout = 4000;
    while(!bounds_vector.empty() && timeout-- >= 0){
        
        const auto bounds = bounds_vector.back(); 
        const auto bound_constraints = bounds.get_bounds_as_constraints();
        
        if(DEBUG_ILP > 2){
            std::cout << "ILP: bounds has " << bounds_vector.size() << " elements. Starting new iteration for bounds: " << bounds << "\n";
        }

        bounds_vector.pop_back();
        
        Constraints updated_constraints = constraints;
        updated_constraints.insert(updated_constraints.end(), bound_constraints.begin(), bound_constraints.end());

        if(DEBUG_ILP > 2){
            std::cout << "ILP: starting optimize with new constraints: " << updated_constraints << "\n";
        }

        Solution sol = optimize(updated_constraints, cost);

        if(!sol.exists){

            if(DEBUG_ILP > 2){
                std::cout << "ILP: no solution found\n";
            }
            
            continue;
        }
    
        if(DEBUG_ILP > 2){
            std::cout << "ILP: Solution: " << sol.cost << " (" << sol.coordinates.transpose() << ")\n";
        }

        const auto maybe_fractional = find_first_fractional(sol.coordinates);

        // Some coordinate is not an integer. This is an upper bound, so if the real lp cost
        // is smaller than the best integer cost so far, there's no point pursuing this branch
        if(maybe_fractional){
            
            if(DEBUG_ILP > 2){
                std::cout << "ILP: Not all coordinates are integers:\n";
            }

            // Prune this branch - there's no way any integer solution coming out of it can
            // beat the current best one
            if(sol.cost <= best_cost){
                if(DEBUG_ILP > 2){
                    std::cout << "ILP: This branch is worse.\n";
                }
                continue;
            }

            // variable x_i is fractional. Need to branch into x <= floor(x_i) and x >= ceil(x_i)
            unsigned int fractional_index = *maybe_fractional;
            double fractional = sol.coordinates(fractional_index);

            auto bounds1 = bounds;
            auto& constraint1 = bounds1.constraints_.at(fractional_index);
            constraint1.largest = std::floor(fractional);
            
            // If only one of the constraints exists, add the new constraint
            if((!constraint1.largest && constraint1.smallest) || 
                (constraint1.largest && !constraint1.smallest)){
                bounds_vector.push_back(bounds1);
                
                if(DEBUG_ILP > 2){
                    std::cout << "ILP: bounds1 accepted via 1:\n";
                }
                
            } else 
            
                // If both constraints exists, check if it's valid. The comparison is
                // fine because these doubles represent ints
                if(constraint1.largest && constraint1.smallest &&
                    *constraint1.largest >= *constraint1.smallest){
                    bounds_vector.push_back(bounds1);

                    
                    if(DEBUG_ILP > 2){
                        std::cout << "ILP: bounds1 accepted via 2:\n";
                    }
                }


            auto bounds2 = bounds;
            auto& constraint2 = bounds2.constraints_.at(fractional_index);
            constraint2.smallest = std::ceil(fractional);
            
            // If only one of the constraints exists, add the new constraint
            if((!constraint2.largest && constraint2.smallest) || 
                (constraint2.largest && !constraint2.smallest)){
                bounds_vector.push_back(bounds2);

                
                if(DEBUG_ILP > 2){
                    std::cout << "ILP: bounds2 accepted via 1:\n";
                }
            } else 
            
                // If both constraints exists, check if it's valid. The comparison is
                // fine because these doubles represent ints
                if(constraint2.largest && constraint2.smallest &&
                    *constraint2.largest >= *constraint2.smallest){
                    bounds_vector.push_back(bounds2);

                    
                    if(DEBUG_ILP > 2){
                        std::cout << "ILP: bounds2 accepted via 2:\n";
                    }

                }



            if(DEBUG_ILP > 2){
                std::cout << "ILP: New bounds:\n";
                std::cout << "ILP: bounds1: " << bounds1 << "\n";
                std::cout << "ILP: bounds2: " << bounds2 << "\n";
            }

            
        // All coordinates are integers - candidate solution
        } else {   
        
            if(DEBUG_ILP > 2){
                std::cout << "ILP: All coordinates are integers:\n";
            }
                    
            if(sol.cost > best_cost){

                if(DEBUG_ILP > 2){
                    std::cout << "ILP: New cost " << sol.cost << " is better:\n";
                }
                

                best_cost = sol.cost;
                const auto maybe_int_coords = convert_to_int(sol.coordinates);
                
                if(!maybe_int_coords){
                    throw;
                }

                solution_coords = *maybe_int_coords;
                sol_exists = true;
            }
            
        }

    }

    return {solution_coords, best_cost, sol_exists};
}

