include(CMakeFindDependencyMacro)

find_dependency(Eigen3)
find_dependency(highs)

include(${CMAKE_CURRENT_LIST_DIR}/integer_solverTargets.cmake)