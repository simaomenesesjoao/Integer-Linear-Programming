
cmake_minimum_required(VERSION 3.16)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)


set(PROJECT_NAME aoc_utils)

project(${PROJECT_NAME})
message("Project source dir: " ${PROJECT_SOURCE_DIR})

add_library(aoc_utils src/utils.cpp src/lp.cpp)
target_link_libraries(${PROJECT_NAME} PUBLIC Eigen3::Eigen)
target_include_directories(aoc_utils PUBLIC ${PROJECT_SOURCE_DIR}/include)

find_package(Eigen3 REQUIRED)
find_package(Catch2 3 REQUIRED)
add_executable(utils_tests tests/test.cpp)
target_link_libraries(utils_tests PRIVATE 
    aoc_utils 
    Catch2::Catch2WithMain
)
