/**
 * Test suite for prime_checker.js
 * 
 * This module contains comprehensive unit tests for the JavaScript prime number checker
 * implementation, including edge cases, boundary conditions, and performance tests.
 */

const { isPrime, findPrimesInRange, main } = require('./prime_checker');

describe('isPrime function', () => {
    describe('numbers less than 2', () => {
        test('should return false for negative numbers', () => {
            expect(isPrime(-5)).toBe(false);
            expect(isPrime(-1)).toBe(false);
        });
        
        test('should return false for 0 and 1', () => {
            expect(isPrime(0)).toBe(false);
            expect(isPrime(1)).toBe(false);
        });
    });
    
    describe('number 2', () => {
        test('should return true for 2', () => {
            expect(isPrime(2)).toBe(true);
        });
    });
    
    describe('even numbers greater than 2', () => {
        test('should return false for even numbers', () => {
            const evenNumbers = [4, 6, 8, 10, 12, 100, 1000];
            evenNumbers.forEach(num => {
                expect(isPrime(num)).toBe(false);
            });
        });
    });
    
    describe('small known prime numbers', () => {
        test('should return true for small primes', () => {
            const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
            smallPrimes.forEach(prime => {
                expect(isPrime(prime)).toBe(true);
            });
        });
    });
    
    describe('small known composite numbers', () => {
        test('should return false for small composites', () => {
            const composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28];
            composites.forEach(composite => {
                expect(isPrime(composite)).toBe(false);
            });
        });
    });
    
    describe('larger known prime numbers', () => {
        test('should return true for larger primes', () => {
            const largerPrimes = [53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113];
            largerPrimes.forEach(prime => {
                expect(isPrime(prime)).toBe(true);
            });
        });
    });
    
    describe('perfect squares', () => {
        test('should return false for perfect squares', () => {
            const perfectSquares = [9, 25, 49, 121, 169, 289]; // 3², 5², 7², 11², 13², 17²
            perfectSquares.forEach(square => {
                expect(isPrime(square)).toBe(false);
            });
        });
    });
    
    describe('edge cases', () => {
        test('should handle tricky composite numbers', () => {
            // These are composite numbers that might be mistakenly identified as prime
            const trickyComposites = [91, 93, 95, 121, 143, 169, 187, 209];
            trickyComposites.forEach(num => {
                expect(isPrime(num)).toBe(false);
            });
        });
        
        test('should handle larger primes correctly', () => {
            const largerPrimes = [127, 131, 137, 139, 149];
            largerPrimes.forEach(prime => {
                expect(isPrime(prime)).toBe(true);
            });
        });
    });
});

describe('findPrimesInRange function', () => {
    describe('invalid ranges', () => {
        test('should return empty array when start > end', () => {
            const result = findPrimesInRange(10, 5);
            expect(result).toEqual([]);
        });
        
        test('should return empty array for range with no primes', () => {
            const result = findPrimesInRange(-5, 1);
            expect(result).toEqual([]);
        });
    });
    
    describe('valid ranges', () => {
        test('should find primes in range 1-10', () => {
            const expected = [2, 3, 5, 7];
            const actual = findPrimesInRange(1, 10);
            expect(actual).toEqual(expected);
        });
        
        test('should find primes in range 10-30', () => {
            const expected = [11, 13, 17, 19, 23, 29];
            const actual = findPrimesInRange(10, 30);
            expect(actual).toEqual(expected);
        });
        
        test('should handle single number ranges', () => {
            // Single prime
            expect(findPrimesInRange(7, 7)).toEqual([7]);
            // Single composite
            expect(findPrimesInRange(8, 8)).toEqual([]);
        });
        
        test('should return empty array for range with no primes', () => {
            const result = findPrimesInRange(24, 28);
            expect(result).toEqual([]);
        });
        
        test('should find all primes up to 50', () => {
            const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
            const actual = findPrimesInRange(1, 50);
            expect(actual).toEqual(expected);
            expect(actual).toHaveLength(15);
        });
        
        test('should find correct number of primes up to 100', () => {
            const primes = findPrimesInRange(1, 100);
            expect(primes).toHaveLength(25);
            expect(primes).toContain(89);
            expect(primes).toContain(97);
            expect(primes).not.toContain(91);
            expect(primes).not.toContain(93);
        });
    });
});

describe('main function', () => {
    let consoleSpy;
    
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });
    
    afterEach(() => {
        consoleSpy.mockRestore();
    });
    
    test('should output expected content', () => {
        main();
        
        // Check that key elements are in the output
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining("Prime Number Checker - JavaScript Implementation")
        );
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining("Testing individual numbers")
        );
    });
    
    test('should test individual numbers correctly', () => {
        main();
        
        // Check specific test outputs
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringMatching(/17.*Prime/)
        );
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringMatching(/25.*Not Prime/)
        );
    });
});

describe('performance tests', () => {
    test('should handle larger primes efficiently', () => {
        const largerPrimes = [997, 1009, 1013, 1019, 1021];
        largerPrimes.forEach(prime => {
            expect(isPrime(prime)).toBe(true);
        });
    });
    
    test('should handle larger composite numbers', () => {
        const largerComposites = [1000, 1001, 1002, 1004, 1006];
        largerComposites.forEach(composite => {
            expect(isPrime(composite)).toBe(false);
        });
    });
    
    test('should efficiently count primes in ranges', () => {
        const primesTo100 = findPrimesInRange(1, 100);
        expect(primesTo100).toHaveLength(25);
        
        const primesTo200 = findPrimesInRange(1, 200);
        expect(primesTo200).toHaveLength(46);
    });
    
    test('should complete large prime checks quickly', () => {
        const start = performance.now();
        const result = isPrime(982451653); // Large prime
        const end = performance.now();
        
        expect(result).toBe(true);
        expect(end - start).toBeLessThan(100); // Should complete in less than 100ms
    });
});

describe('algorithm consistency', () => {
    test('should produce same results as mathematical definition', () => {
        // Test against known sequence of first 25 primes
        const first25Primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        
        first25Primes.forEach(prime => {
            expect(isPrime(prime)).toBe(true);
        });
        
        // Test that no numbers between these primes are incorrectly identified as prime
        for (let i = 2; i <= 97; i++) {
            if (!first25Primes.includes(i)) {
                expect(isPrime(i)).toBe(false);
            }
        }
    });
});
