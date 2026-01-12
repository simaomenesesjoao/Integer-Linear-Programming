#pragma once
#include "lp/lp.h"

SolutionI optimize_ilp_highs(const Constraints& constraints,
                             const Eigen::VectorXd& cost,
                             bool quiet = true);