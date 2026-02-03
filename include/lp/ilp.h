#include "lp/lp.h"

constexpr unsigned int DEBUG_ILP = 0;

SolutionI optimize_ilp(const Constraints& constraints, const Eigen::VectorXd& cost);
