#include "lp/lp.h"

constexpr unsigned int DEBUG_ILP = 0;

std::optional<SolutionI> optimize_ilp(const Constraints& constraints, const Eigen::VectorXd& cost);
