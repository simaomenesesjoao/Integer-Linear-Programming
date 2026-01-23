#include <iostream>
#include "lp/lp2.h"
#include <cassert>

Constraint::Constraint(const std::optional<double>& s, const std::vector<double>& r, const std::optional<double>& l){
    smallest = s;
    largest = l;
    row = VectorD(r.size());

    for(unsigned int i=0; i<r.size(); i++){
        row(i) = r[i];
    }

}

Tableau::Tableau(const Matrix& mat, unsigned int dimension, unsigned int n_constraints, unsigned int n_artificial): basis_dimension{dimension+n_artificial}, num_constraints{n_constraints}, num_artificial{n_artificial}{
    matrix = mat;
    
    basis = VectorI::Zero(basis_dimension);
    dictionary = VectorI::Zero(num_constraints);

    for(unsigned int i=0; i<basis_dimension; i++){
        basis(i) = i;
    }

    for(unsigned int i=0; i<num_constraints; i++){
        dictionary(i) = i + basis_dimension;
    }

}

void gaussian_elimination(Matrix& matrix, unsigned int row, unsigned int col){
    double entry = matrix(row, col);

    // Gaussian elimination cannot be done on a zero entry
    assert(!is_equal(entry, 0));
    assert(row < matrix.rows());
    assert(col < matrix.cols());

    matrix.row(row) /= entry;

    for(unsigned int i=0; i<matrix.rows(); i++){
        if(i == row){
            continue;
        }
        matrix.row(i) -= matrix.row(row)*matrix(i, col);
    }
}

std::optional<unsigned int> find_lowest_ratio_row(const Matrix& matrix, unsigned int col, unsigned int num_constraints){
    unsigned int last_col = matrix.cols()-1;

    std::optional<double> smallest_ratio = std::nullopt;
    std::optional<unsigned int> row = std::nullopt;

    for(unsigned int i=0; i<num_constraints; i++){
        double entry = matrix(i, col);
        double right = matrix(i, last_col);

        if(entry < tol || right < tol){
            continue;
        }
        double ratio = right/entry;

        if(!smallest_ratio || ratio < *smallest_ratio){
            smallest_ratio = ratio;
            row = i;
        }
    }
    
    return row;
}

// Find the first instance of val
std::optional<unsigned int> index_of(const VectorI& vector, unsigned int val){
    for(unsigned int i=0; i<vector.size(); i++){
        if(vector(i) == val){
            return i;
        }
    }
    return std::nullopt;
}

void Tableau::pivot(unsigned int var_out, unsigned int row){
    // Gaussian elimination, plus keeping track of the change of variables

    gaussian_elimination(matrix, row, var_out);

    unsigned int var_in = dictionary(row);
    const auto basis_index = index_of(basis, var_out);
    basis(*basis_index) = var_in;
    dictionary(row) = var_out;
}

bool Tableau::simplex_pivot(unsigned int var_out){

    // Can't pivot out of a variable if it's not in the basis
    const auto basis_index = index_of(basis, var_out);
    assert(basis_index);

    const auto row = find_lowest_ratio_row(matrix, var_out, num_constraints);

    // Cannot find next vertex - unbounded
    if(!row){
        return false;
    }

    pivot(var_out, *row);

    return true;
}

Tableau build_tableau(const Constraints& constraints, const VectorD& cost){
    const unsigned int num_dimensions = cost.size();
    unsigned int num_constraints = 0;
    unsigned int num_artificial = 0;

    for(const auto& [smallest, row, largest]: constraints){

        // ex: 1 <= x + 2y which is equivalent to -x-2y <= -1
        if(smallest){
            num_constraints++;
            if(*smallest > tol){
                num_artificial++;
            }
        }

        // ex: x - y <= 3
        if(largest){
            num_constraints++;
            if(*largest < -tol){
                num_artificial++;
            }
        }
    }
    
    Matrix matrix(num_constraints+2, num_dimensions+num_constraints+num_artificial+1);
    const unsigned int last_col = num_dimensions+num_constraints+num_artificial;
    
    unsigned int row_index = 0;
    unsigned int artificial_index = 0;
    for(const auto& [smallest, row, largest]: constraints){

        if(smallest){
            matrix.block(row_index, 0, 1, num_dimensions) = -row.transpose();
            matrix(row_index, num_dimensions+num_artificial+row_index) = 1;
            matrix(row_index, last_col) = -*smallest;
            if(*smallest > tol){
                matrix(row_index, num_dimensions+artificial_index) = -1;
                artificial_index++;
                matrix.row(row_index) *= -1;
            }
            row_index++;
        }

        if(largest){
            matrix.block(row_index, 0, 1, num_dimensions) = row.transpose();
            matrix(row_index, num_dimensions+num_artificial+row_index) = 1;
            matrix(row_index, last_col) = *largest;
            if(*largest < -tol){
                matrix(row_index, num_dimensions+artificial_index) = -1;
                matrix.row(row_index) *= -1;
            }
            row_index++;
        }
    }
    // Cost function
    matrix.block(num_constraints, 0, 1, num_dimensions) = cost.transpose();

    // Minimize artificial variables: add a minus sign
    matrix.block(num_constraints+1, num_dimensions, 1, num_artificial) = -VectorD::Ones(num_artificial).transpose();
    
    return Tableau(matrix, num_dimensions, num_constraints, num_artificial);
}

std::optional<unsigned int> find_largest_positive(const VectorD& vector){
    std::optional<double> largest = std::nullopt;
    std::optional<unsigned int> index_largest = std::nullopt;

    for(unsigned int i=0; i<vector.size(); i++){
        double v = vector(i);
        if(v > tol && (!largest || v > *largest)){
            largest = v;
            index_largest = i;
        }
    }

    return index_largest;
}

void pivot_into_feasible(Tableau& tableau){
    for(unsigned int i=0; i<tableau.num_artificial; i++){
        unsigned int j = i+tableau.basis_dimension-tableau.num_artificial;
        tableau.simplex_pivot(j);
    }
}

bool is_artificial(unsigned int i, unsigned int num_dimensions, unsigned int num_artificial){
    // Artificial variables are the ones just after the real variables
    return i >= num_dimensions && i < num_dimensions + num_artificial;
}

bool is_slack(unsigned int i, unsigned int num_dimensions, unsigned int num_artificial){
    // Slack variables are the ones just after the real and artificial variables
    return i >= num_dimensions + num_artificial;
}

Tableau Tableau::trim_tableau() {

    // Pivot in all the artificial variables
    for(unsigned int row=0; row<num_constraints; row++){
        unsigned int var = dictionary[row];

        if(is_artificial(var, basis_dimension - num_artificial, num_artificial)){

            // find a variable that is in the tableau basis and has nonzero entry in this row
            bool pivoted_in = false;
            for(unsigned int col=0; col<basis_dimension+num_constraints; col++){
                unsigned int basis_var = basis[col];

                if(is_artificial(basis_var, basis_dimension - num_artificial, num_artificial)){
                    continue;
                }

                double entry = matrix(row, col);
                if(is_equal(entry, 0)){
                    continue;
                }

                pivot(basis_var, row);
                pivoted_in = true;
                break;
            }

            assert(pivoted_in);
              
        }        
    }

    // Now that all the artificial variables are part of the basis, we can discard 
    // them and lower the dimensionality
    unsigned int dimension = basis_dimension - num_artificial;
    Matrix new_matrix(num_constraints + 1, dimension + num_constraints + 1);

    // Copy the non-artificial dimensions and corresponding block of the cost function
    new_matrix.block(0, 0, num_constraints+1, dimension) = matrix.block(0, 0, num_constraints+1, dimension);

    // Copy the slack variables and corresponding block of the cost function
    new_matrix.block(0, dimension, num_constraints+1, num_constraints+1) = matrix.block(0, basis_dimension, num_constraints+1, num_constraints+1);

    VectorI new_basis = VectorI::Zero(dimension);
    unsigned int index = 0;
    for(unsigned int var: basis){
        if(is_artificial(var, dimension, num_artificial)){
            continue;
        }

        // The variables need to be reindexed because artificial variables are gone
        new_basis(index) = is_slack(var, dimension, num_artificial) ? var-num_artificial : var;
        index++;
        
    }

    VectorI new_dictionary = VectorI::Zero(num_constraints);
    index = 0;
    for(unsigned int var: dictionary){

        // Artificial variables should all have been pivoted in during the previous step
        assert(!is_artificial(var, dimension, num_artificial));

        // The variables need to be reindexed because artificial variables are gone
        new_dictionary(index) = is_slack(var, dimension, num_artificial) ? var-num_artificial : var;
        index++;
        
    }

    // Create a new tableau, with no artificial variables
    Tableau new_tableau(new_matrix, dimension, num_constraints, 0);
    new_tableau.basis = new_basis;
    new_tableau.dictionary = new_dictionary;

    return new_tableau;
}

bool simplex(Tableau& tableau){
    // Find the largest cost function element

    // The Simplex algorithm only works when all the rhs entries are non-negative
    assert((tableau.get_rhs().array() > -tol).all());
    
    while(true){
        const auto index_largest = find_largest_positive(tableau.get_cost_function());

        // Cannot improve cost function
        if(!index_largest){
            std::cout << "Cannot improve further\n";
            return true;
        }

        tableau.simplex_pivot(*index_largest);
    }
    return false;
}

bool solve_lp(const Constraints& constraints, const VectorD& cost){

    Tableau tableau = build_tableau(constraints, cost);
    pivot_into_feasible(tableau);
    simplex(tableau);    

    // Feasible region not found
    if(tableau.get_cost() > tol){
        return false;
    }

    Tableau tableau2 = tableau.trim_tableau();
    simplex(tableau2);

    return false;
}