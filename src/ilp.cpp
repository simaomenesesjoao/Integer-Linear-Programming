#include <iostream>
#include "lp/ilp.h"
#include "lp/lp.h"
#include "lp/utils.h"
#include <cassert>

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



std::optional<SolutionI> optimize_ilp(const Constraints& constraints, const Eigen::VectorXd& cost){
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

        const auto sol = solve_lp(updated_constraints, cost);

        if(!sol){

            if(DEBUG_ILP > 2){
                std::cout << "ILP: no solution found\n";
            }
            
            continue;
        }
    
        if(DEBUG_ILP > 2){
            std::cout << "ILP: Solution: " << sol->cost << " (" << sol->coordinates.transpose() << ")\n";
        }

        const auto maybe_fractional = find_first_fractional(sol->coordinates);

        // Some coordinate is not an integer. This is an upper bound, so if the real lp cost
        // is smaller than the best integer cost so far, there's no point pursuing this branch
        if(maybe_fractional){
            
            if(DEBUG_ILP > 2){
                std::cout << "ILP: Not all coordinates are integers:\n";
            }

            // Prune this branch - there's no way any integer solution coming out of it can
            // beat the current best one
            if(sol->cost <= best_cost){
                if(DEBUG_ILP > 2){
                    std::cout << "ILP: This branch is worse.\n";
                }
                continue;
            }

            // variable x_i is fractional. Need to branch into x <= floor(x_i) and x >= ceil(x_i)
            unsigned int fractional_index = *maybe_fractional;
            double fractional = sol->coordinates(fractional_index);

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
                    
            if(sol->cost > best_cost){

                if(DEBUG_ILP > 2){
                    std::cout << "ILP: New cost " << sol->cost << " is better:\n";
                }
                

                best_cost = sol->cost;
                const auto maybe_int_coords = convert_to_int(sol->coordinates);
                
                if(!maybe_int_coords){
                    throw;
                }

                solution_coords = *maybe_int_coords;
                sol_exists = true;
            }
            
        }

    }
    
    if(!sol_exists){
        return std::nullopt;
    }

    return SolutionI{solution_coords, best_cost};
}