#pragma once
#include <Eigen/Dense>
#include <optional>
#include <map>

constexpr double tol = 1e-9;
constexpr unsigned int DEBUG = 0;
constexpr unsigned int DEBUG_ILP = 0;


bool is_equal(double x, double y);
bool is_equal(const Eigen::VectorXd& x, const Eigen::VectorXd& y);
bool is_equal(const Eigen::VectorXi& x, const Eigen::VectorXi& y);

struct Constraint {
    std::optional<double> smallest;
    std::vector<double> row;
    std::optional<double> largest;

    friend std::ostream& operator<<(std::ostream& stream, const Constraint& constraint);
};

using Constraints = std::vector<Constraint>;

struct Solution {
    Eigen::VectorXd coordinates;
    double cost;
    bool exists;
};

struct SolutionI {
    Eigen::VectorXi coordinates;
    double cost;
    bool exists;
};

std::optional<std::pair<Eigen::MatrixXd, std::vector<unsigned int>>> solve_lp(
    const Eigen::MatrixXd& A, 
    std::vector<unsigned int> pivots, 
    unsigned int num_constraints, 
    unsigned int cost_row, 
    bool pivot_out_artificial = false);

Solution optimize(const Constraints& constraints, const Eigen::VectorXd& cost);
SolutionI optimize_ilp(const Constraints& constraints, const Eigen::VectorXd& cost);

Eigen::MatrixXd add_slack(const Constraints& constraints, const Eigen::VectorXd& cost);
Eigen::MatrixXd add_artificial(const Eigen::MatrixXd& A);
