cmake_minimum_required(VERSION 3.16)

project(integer_solver)
message("Project source dir: " ${PROJECT_SOURCE_DIR})

find_package(Eigen3 REQUIRED)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

include(FetchContent)

set(CATCH_BUILD_TESTING OFF CACHE BOOL "" FORCE)
set(CATCH_INSTALL_DOCS OFF CACHE BOOL "" FORCE)
set(CATCH_INSTALL_EXTRAS OFF CACHE BOOL "" FORCE)

FetchContent_Declare(
  Catch2
  GIT_REPOSITORY https://github.com/catchorg/Catch2.git
  GIT_TAG v3.5.4
)

FetchContent_Declare(
  highs
  GIT_REPOSITORY https://github.com/ERGO-Code/HiGHS.git
  GIT_TAG        v1.12.0
)

# Optional but recommended for faster, quieter builds
set(HIGHS_BUILD_TESTS OFF CACHE BOOL "" FORCE)
set(HIGHS_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
set(HIGHS_BUILD_SHARED OFF CACHE BOOL "" FORCE)

FetchContent_MakeAvailable(Catch2)
FetchContent_MakeAvailable(highs)

add_library(integer_solver src/lp.cpp src/lp2.cpp src/highs_interface.cpp src/brute_force.cpp)

target_include_directories(integer_solver
  PUBLIC
    $<BUILD_INTERFACE:${PROJECT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)

target_link_libraries(integer_solver
  PUBLIC
    Eigen3::Eigen
    highs
)

install(TARGETS integer_solver
  EXPORT integer_solverTargets
  LIBRARY DESTINATION lib
  ARCHIVE DESTINATION lib
  RUNTIME DESTINATION bin
)
install(DIRECTORY include/
  DESTINATION include
)
install(EXPORT integer_solverTargets
  NAMESPACE integer_solver::
  DESTINATION lib/cmake/integer_solver
)

install(FILES
  cmake/integer_solverConfig.cmake
  DESTINATION lib/cmake/integer_solver
)


add_executable(utils_tests tests/test.cpp)

target_link_libraries(utils_tests PRIVATE
    integer_solver 
    Catch2::Catch2WithMain
)


add_executable(utils_tests2 tests/test2.cpp)

target_link_libraries(utils_tests2 PRIVATE
    integer_solver
    Catch2::Catch2WithMain
)
