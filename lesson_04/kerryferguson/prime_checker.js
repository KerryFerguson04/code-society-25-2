#!/usr/bin/env node
/**
 * Prime Number Checker - JavaScript Implementation
 * Author: Kerry Ferguson
 * Date: August 14, 2025
 * 
 * This module provides functionality to determine whether a given number is prime.
 * A prime number is a natural number greater than 1 that has no positive divisors
 * other than 1 and itself.
 */

/**
 * Determines whether a given number is prime.
 * 
 * @param {number} n - The number to check for primality
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(n) {
    // Handle edge cases
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    
    // Check odd divisors up to sqrt(n)
    const sqrtN = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= sqrtN; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

/**
 * Finds all prime numbers within a given range.
 * 
 * @param {number} start - The starting number (inclusive)
 * @param {number} end - The ending number (inclusive)
 * @returns {number[]} An array of all prime numbers in the range
 */
function findPrimesInRange(start, end) {
    const primes = [];
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}

/**
 * Main function to demonstrate prime number checking functionality.
 */
function main() {
    console.log("Prime Number Checker - JavaScript Implementation");
    console.log("=".repeat(47));
    
    // Test individual numbers
    const testNumbers = [1, 2, 3, 4, 5, 17, 25, 29, 97, 100];
    
    console.log("\nTesting individual numbers:");
    testNumbers.forEach(num => {
        const result = isPrime(num);
        console.log(`${num.toString().padStart(3)} -> ${result ? "Prime" : "Not Prime"}`);
    });
    
    // Find primes in a range
    console.log("\nPrime numbers between 1 and 50:");
    const primes = findPrimesInRange(1, 50);
    console.log(primes);
    
    // Interactive mode (Node.js specific)
    if (typeof process !== 'undefined' && process.stdin) {
        console.log("\nInteractive mode (press Ctrl+C to exit):");
        
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        const askForNumber = () => {
            rl.question("Enter a number to check (or 'exit' to quit): ", (input) => {
                const trimmed = input.trim().toLowerCase();
                
                if (trimmed === 'exit' || trimmed === 'quit') {
                    console.log("Goodbye!");
                    rl.close();
                    return;
                }
                
                const userInput = parseInt(trimmed);
                
                if (isNaN(userInput)) {
                    console.log("Please enter a valid integer.");
                } else {
                    const result = isPrime(userInput);
                    console.log(`${userInput} is ${result ? "prime" : "not prime"}`);
                }
                
                askForNumber(); // Continue the loop
            });
        };
        
        askForNumber();
    }
}

// Export functions for testing (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isPrime,
        findPrimesInRange,
        main
    };
}

// Run main function if this file is executed directly
if (typeof require !== 'undefined' && require.main === module) {
    main();
}
