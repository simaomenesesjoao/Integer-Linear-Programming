#pragma once
#include "lp/lp.h"

std::optional<SolutionI> optimize_ilp_highs(const Constraints& constraints,
                             const Eigen::VectorXd& cost,
                             bool quiet = true);