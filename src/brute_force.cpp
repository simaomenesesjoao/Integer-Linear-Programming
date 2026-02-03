#include "lp/brute_force.h"

static inline bool approx_equal(double a, double b, double tole = tol) {
    return std::abs(a - b) <= tole;
}

// Feasibility: since you said "same lower and upper bound", we enforce equality.
// Also enforces x >= 0 integer by construction.
static inline bool satisfies_equalities(const Constraints& constraints, const Eigen::VectorXi& x) {
    for (const auto& [lowest, row, highest] : constraints) {
        // If it's not an equality row, ignore (or you can throw).
        if (!lowest || !highest) return false;
        if (!approx_equal(*lowest, *highest)) return false;

        double lhs = 0.0;
        for (int i = 0; i < x.size(); ++i) lhs += row(i) * (double)x(i);

        if (!approx_equal(lhs, *highest, 1e-7)) return false; // equality tolerance
    }
    return true;
}

// Try to infer per-variable upper bounds from constraints that are "single variable":
// a*x_i = b, a>0  => x_i = b/a (must be integer >=0) and ub = that exact value
// a*x_i <= b      => ub = floor(b/a)
// For general equalities, we can't infer tight bounds without more work, so we fall back.
static inline std::vector<int> infer_ubs_from_equalities(
    const Constraints& constraints,
    int n_vars,
    int default_ub
) {
    std::vector<int> ub(n_vars, default_ub);

    for (const auto& [lowest, row, highest] : constraints) {
        if (!lowest || !highest) continue;
        if (!approx_equal(*lowest, *highest)) continue;
        const double b = *highest;

        int j = -1;
        double a = 0.0;
        bool single = true;

        for (int k = 0; k < n_vars; ++k) {
            const double rk = row(k);
            if (std::abs(rk) > tol) {
                if (j != -1) { single = false; break; }
                j = k;
                a = rk;
            }
        }
        if (!single || j == -1) continue;

        if (a > tol) {
            double v = b / a;
            int iv = (int)std::llround(v);
            if (approx_equal(v, (double)iv, 1e-7) && iv >= 0) {
                ub[j] = std::min(ub[j], iv);
            } else {
                // If equality forces non-integer value, system is infeasible over integers.
                ub[j] = -1;
            }
        }
    }

    for (int i = 0; i < n_vars; ++i) {
        if (ub[i] < 0) ub[i] = -1;
    }
    return ub;
}

// Brute-force maximization over ALL integer points x >= 0 with x_i <= ub_i
// WARNING: exponential in n and ub sizes; only usable for small problems.
std::optional<SolutionI> brute_force_maximize_equalities(
    const Constraints& constraints,
    const Eigen::VectorXd& cost,
    int default_ub,
    bool infer_ubs) {
    const int n = (int)cost.size();
    if (n == 0) return std::nullopt;

    std::vector<int> ub = infer_ubs ? infer_ubs_from_equalities(constraints, n, default_ub)
                                    : std::vector<int>(n, default_ub);

    // If any inferred ub is -1, there is no integer solution consistent with single-var equalities.
    for (int i = 0; i < n; ++i) {
        if (ub[i] < 0) return std::nullopt;
    }

    Eigen::VectorXi x = Eigen::VectorXi::Zero(n);
    Eigen::VectorXi best_x = Eigen::VectorXi::Zero(n);

    double best_obj = -std::numeric_limits<double>::infinity();
    bool found = false;

    std::function<void(int)> dfs = [&](int idx) {
        if (idx == n) {
            if (!satisfies_equalities(constraints, x)) return;

            double obj = cost.dot(x.cast<double>());
            if (!found || obj > best_obj + 1e-12) {
                best_obj = obj;
                best_x = x;
                found = true;
            }
            return;
        }

        for (int v = 0; v <= ub[idx]; ++v) {
            x(idx) = v;
            dfs(idx + 1);
        }
        x(idx) = 0;
    };

    dfs(0);

    return SolutionI{best_x, best_obj};
}




