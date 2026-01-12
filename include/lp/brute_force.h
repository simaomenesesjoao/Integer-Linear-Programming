#pragma once
#include "lp/lp.h"

SolutionI brute_force_maximize_equalities(
    const Constraints& constraints,
    const Eigen::VectorXd& cost,
    int default_ub = 30,
    bool infer_ubs = true
);
