#pragma once
#include <Eigen/Dense>
#include <optional>
#include <ostream>
#include <map>

using VectorD = Eigen::VectorXd;
using VectorI = Eigen::VectorXi;
using Matrix = Eigen::MatrixXd;

struct Constraint {
    std::optional<double> smallest;
    VectorD row;
    std::optional<double> largest;

    Constraint(const std::optional<double>& smallest, const std::vector<double>& row, const std::optional<double>& largest);
};

using Constraints = std::vector<Constraint>;

class Tableau {
public:
    //Matrix get_matrix();
    Tableau(const Matrix& matrix, unsigned int basis_dimension, unsigned int num_constraints, unsigned int num_artificial);
    bool simplex_pivot(unsigned int col);
    void pivot(unsigned int col, unsigned int row);

    friend std::ostream& operator<<(std::ostream& stream, const Tableau& tableau){
        stream << tableau.matrix << "\n" << tableau.basis.transpose() << "\n" << tableau.dictionary.transpose();
        return stream;
    }

    VectorD get_cost_function(){
        // if(num_artificial > 0){
        //     return matrix.row(matrix.rows() - 2);
        // } else {
        //     return matrix.row(matrix.rows() - 1);
        // }
        return matrix.row(matrix.rows() - 1).head(matrix.cols() - 1);
    }

    VectorD get_rhs(){
        return matrix.col(matrix.cols() - 1).head(num_constraints);
    }

    double get_cost(){
        return matrix(matrix.rows() - 1, matrix.cols() - 1);
    }

    VectorI get_dictionary(){
        return dictionary;
    }

    Tableau trim_tableau();

    const unsigned int basis_dimension;
    const unsigned int num_constraints;
    const unsigned int num_artificial;

private:
    VectorI basis;
    VectorI dictionary;
    Matrix matrix;
};

constexpr double tol = 1e-9;

bool is_equal(double x, double y);

void gaussian_elimination(Matrix& matrix, unsigned int row, unsigned int col);

void pivot(Tableau& matrix, unsigned int col);

void pivot_into_feasible(Tableau& tableau);

Tableau build_tableau(const Constraints& constraints, const VectorD& cost);

bool simplex(Tableau& tableau);

bool solve_lp(const Constraints& constraints, const VectorD& cost);