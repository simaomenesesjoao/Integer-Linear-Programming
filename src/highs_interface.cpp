#include <Highs.h>
#include "lp/highs_interface.h"

// Adapter: same interface as your solver.
// Maximizes cost^T x, subject to constraints and x >= 0 integer.
SolutionI optimize_ilp_highs(const Constraints& constraints,
                                    const Eigen::VectorXd& cost,
                                    bool quiet) {
    const int n = (int)cost.size();

    Highs highs;
    if (quiet) highs.setOptionValue("output_flag", false);

    const double INF = highs.getInfinity();

    // ----- Variables: x_i >= 0, integer -----
    for (int i = 0; i < n; ++i) {
        highs.addVar(/*lower=*/0.0, /*upper=*/INF);
        highs.changeColIntegrality(i, HighsVarType::kInteger);
        highs.changeColCost(i, cost(i));
    }

    // Maximize
    highs.changeObjectiveSense(ObjSense::kMaximize);

    // ----- Constraints: addRow(row_lower, row_upper, nnz, idx, val) -----
    for (const auto& [lo, row, hi] : constraints) {
        if ((int)row.size() != n) {
            throw std::runtime_error("Constraint row size != cost size");
        }

        double row_lower = lo ? *lo : -INF;
        double row_upper = hi ? *hi :  INF;

        std::vector<int> idx;
        std::vector<double> val;
        idx.reserve(n);
        val.reserve(n);

        for (int j = 0; j < n; ++j) {
            double a = row[j];
            if (a != 0.0) {
                idx.push_back(j);
                val.push_back(a);
            }
        }

        highs.addRow(row_lower, row_upper, (int)idx.size(), idx.data(), val.data());
    }

    // ----- Solve -----
    const HighsStatus run_status = highs.run();
    if (run_status != HighsStatus::kOk) {
        return {Eigen::VectorXi::Zero(n), 0.0, false};
    }

    const HighsModelStatus ms = highs.getModelStatus();

    // Only treat OPTIMAL as "exists" for your use-case (AoC wants exact best).
    if (ms != HighsModelStatus::kOptimal) {
        // Could map other statuses if you want:
        // kInfeasible, kUnbounded, kFeasible, etc.
        return {Eigen::VectorXi::Zero(n), 0.0, false};
    }

    const HighsSolution& sol = highs.getSolution();
    Eigen::VectorXi x_int(n);

    // HiGHS returns doubles; convert carefully
    for (int i = 0; i < n; ++i) {
        double xi = sol.col_value[i];
        x_int(i) = (int)std::llround(xi);
        // If you want strict checking:
        // if (!is_integerish(xi)) { ... }  // should be integer for MIP optimum
    }

    double obj = highs.getObjectiveValue(); // already maximized

    return {x_int, obj, true};
}
