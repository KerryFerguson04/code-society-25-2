# Prime Number Checker - Dual Language Implementation

**Author:** Kerry Ferguson  
**Date:** August 14, 2025  
**Assignment:** Lesson 04 - How to Be A Great Software Engineer

## Overview

This project implements a prime number checker in two different programming languages: **Python** and **JavaScript**. Both implementations provide identical functionality for determining whether numbers are prime and finding all primes within a given range.

## Files Structure

```
kerryferguson/
├── prime_checker.py          # Python implementation
├── prime_checker.js          # JavaScript implementation
├── test_prime_checker.py     # Python unit tests (unittest)
├── test_runner.js           # JavaScript tests (custom runner)
├── package.json             # Node.js project configuration
├── README.md               # This file
├── COVERAGE_ANALYSIS.md    # Detailed test coverage report
└── TEST_README.md          # Comprehensive test documentation
```

## Running the Implementations

### Python
```bash
# Run the program
python3 prime_checker.py

# Run tests
python3 test_prime_checker.py

# Run with coverage
python3 -m coverage run --source=. test_prime_checker.py
python3 -m coverage report -m
```

### JavaScript
```bash
# Run the program
node prime_checker.js

# Run tests
node test_runner.js
```

## Comparative Analysis: Python vs JavaScript

### Similarities

**Algorithm Implementation:** Both languages implement identical mathematical logic using the optimized trial division method. The core algorithm checks divisibility only up to the square root of the input number and skips even divisors after checking for 2, resulting in the same O(√n) time complexity.

**Code Structure:** Both implementations follow similar architectural patterns with separate functions for individual prime checking (`isPrime`/`is_prime`) and range-based prime finding (`findPrimesInRange`/`find_primes_in_range`). Each includes comprehensive documentation, edge case handling, and interactive demonstration modes.

**Functionality:** The programs produce identical mathematical results and handle the same edge cases (negative numbers, zero, one, and large numbers). Both include user interaction features, error handling for invalid inputs, and demonstration of the algorithms with test cases.

### Key Differences

**Syntax and Language Features:** Python uses more concise, readable syntax with features like list comprehensions and duck typing. JavaScript requires more explicit variable declarations (`const`, `let`) and uses different equality operators (`===` vs `==`). Python's syntax feels more natural for mathematical operations, while JavaScript's C-style syntax provides more familiar patterns for developers from other languages.

**Type System:** Python employs dynamic typing with runtime type checking, allowing more flexible but potentially error-prone code. JavaScript also uses dynamic typing but with different type coercion rules and more explicit number handling. Both languages handle integer arithmetic differently - Python has arbitrary precision integers while JavaScript uses 64-bit floating point numbers.

**Development Environment:** Python's built-in `unittest` framework provides robust testing capabilities with minimal setup. JavaScript required a custom test runner due to environment constraints, though normally would use frameworks like Jest. Python's extensive standard library contrasts with JavaScript's ecosystem that relies heavily on external packages.

**Performance Characteristics:** Both implementations execute with similar algorithmic efficiency, but JavaScript's V8 engine optimization for mathematical operations sometimes provides slight performance advantages for number-centric calculations. Python's interpreted nature may introduce overhead, but the mathematical operations are still highly optimized through underlying C implementations.

**Error Handling:** Python uses exception handling with try/catch blocks that feel more integrated into the language design. JavaScript's error handling works similarly but requires different approaches for different runtime environments (browser vs Node.js). Both handle user input validation effectively but with different idiomatic patterns.

The implementations demonstrate how the same algorithmic thinking can be expressed effectively in different programming paradigms while maintaining mathematical correctness and code readability. Each language's strengths become apparent - Python's emphasis on readability and mathematical expressiveness versus JavaScript's flexibility and widespread applicability across different computing environments.

## Test Results

Both implementations have comprehensive test suites with excellent coverage:

- **Python Tests:** 22 tests, 100% pass rate, 91% code coverage
- **JavaScript Tests:** 11 test suites, 100% pass rate, all core functionality covered

The tests validate algorithm correctness, edge case handling, performance characteristics, and integration between functions, ensuring both implementations are mathematically sound and production-ready.