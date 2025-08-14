import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;

/**
 * Test suite for PrimeChecker class
 * 
 * Tests the isPrime method and findPrimesInRange method with various edge cases,
 * known primes, composite numbers, and boundary conditions.
 */
public class PrimeCheckerTest {

    @Nested
    @DisplayName("isPrime() method tests")
    class IsPrimeTests {

        @Test
        @DisplayName("Should return false for numbers less than 2")
        void testNumbersLessThanTwo() {
            assertFalse(PrimeChecker.isPrime(-5), "Negative numbers should not be prime");
            assertFalse(PrimeChecker.isPrime(-1), "-1 should not be prime");
            assertFalse(PrimeChecker.isPrime(0), "0 should not be prime");
            assertFalse(PrimeChecker.isPrime(1), "1 should not be prime");
        }

        @Test
        @DisplayName("Should return true for the number 2")
        void testNumberTwo() {
            assertTrue(PrimeChecker.isPrime(2), "2 should be prime");
        }

        @Test
        @DisplayName("Should return false for even numbers greater than 2")
        void testEvenNumbers() {
            assertFalse(PrimeChecker.isPrime(4), "4 should not be prime");
            assertFalse(PrimeChecker.isPrime(6), "6 should not be prime");
            assertFalse(PrimeChecker.isPrime(8), "8 should not be prime");
            assertFalse(PrimeChecker.isPrime(100), "100 should not be prime");
            assertFalse(PrimeChecker.isPrime(1000), "1000 should not be prime");
        }

        @Test
        @DisplayName("Should return true for small known prime numbers")
        void testSmallPrimes() {
            int[] smallPrimes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47};
            
            for (int prime : smallPrimes) {
                assertTrue(PrimeChecker.isPrime(prime), prime + " should be prime");
            }
        }

        @Test
        @DisplayName("Should return false for small known composite numbers")
        void testSmallComposites() {
            int[] composites = {4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28};
            
            for (int composite : composites) {
                assertFalse(PrimeChecker.isPrime(composite), composite + " should not be prime");
            }
        }

        @Test
        @DisplayName("Should return true for larger known prime numbers")
        void testLargerPrimes() {
            int[] largerPrimes = {53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113};
            
            for (int prime : largerPrimes) {
                assertTrue(PrimeChecker.isPrime(prime), prime + " should be prime");
            }
        }

        @Test
        @DisplayName("Should return false for perfect squares")
        void testPerfectSquares() {
            assertFalse(PrimeChecker.isPrime(9), "9 (3²) should not be prime");
            assertFalse(PrimeChecker.isPrime(25), "25 (5²) should not be prime");
            assertFalse(PrimeChecker.isPrime(49), "49 (7²) should not be prime");
            assertFalse(PrimeChecker.isPrime(121), "121 (11²) should not be prime");
            assertFalse(PrimeChecker.isPrime(169), "169 (13²) should not be prime");
        }

        @Test
        @DisplayName("Should handle edge cases correctly")
        void testEdgeCases() {
            // Test some tricky numbers that might fool naive algorithms
            assertFalse(PrimeChecker.isPrime(91), "91 (7 × 13) should not be prime");
            assertFalse(PrimeChecker.isPrime(93), "93 (3 × 31) should not be prime");
            assertFalse(PrimeChecker.isPrime(95), "95 (5 × 19) should not be prime");
            
            // Test some larger primes
            assertTrue(PrimeChecker.isPrime(127), "127 should be prime");
            assertTrue(PrimeChecker.isPrime(131), "131 should be prime");
        }
    }

    @Nested
    @DisplayName("findPrimesInRange() method tests")
    class FindPrimesInRangeTests {

        @Test
        @DisplayName("Should return empty list for invalid ranges")
        void testInvalidRanges() {
            List<Integer> result1 = PrimeChecker.findPrimesInRange(5, 2);
            assertTrue(result1.isEmpty(), "Should return empty list when start > end");
            
            List<Integer> result2 = PrimeChecker.findPrimesInRange(-5, 1);
            assertTrue(result2.isEmpty(), "Should return empty list for range with no primes");
        }

        @Test
        @DisplayName("Should find primes in range 1-10")
        void testRange1To10() {
            List<Integer> expected = Arrays.asList(2, 3, 5, 7);
            List<Integer> actual = PrimeChecker.findPrimesInRange(1, 10);
            assertEquals(expected, actual, "Should find primes 2, 3, 5, 7 in range 1-10");
        }

        @Test
        @DisplayName("Should find primes in range 10-30")
        void testRange10To30() {
            List<Integer> expected = Arrays.asList(11, 13, 17, 19, 23, 29);
            List<Integer> actual = PrimeChecker.findPrimesInRange(10, 30);
            assertEquals(expected, actual, "Should find correct primes in range 10-30");
        }

        @Test
        @DisplayName("Should find primes in range with single prime")
        void testSinglePrimeRange() {
            List<Integer> expected = Arrays.asList(7);
            List<Integer> actual = PrimeChecker.findPrimesInRange(7, 7);
            assertEquals(expected, actual, "Should find single prime 7 in range 7-7");
        }

        @Test
        @DisplayName("Should return empty list for range with no primes")
        void testRangeWithNoPrimes() {
            List<Integer> actual = PrimeChecker.findPrimesInRange(24, 28);
            assertTrue(actual.isEmpty(), "Should return empty list for range 24-28 (no primes)");
        }

        @Test
        @DisplayName("Should find all primes up to 50")
        void testPrimesUpTo50() {
            List<Integer> expected = Arrays.asList(
                2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
            );
            List<Integer> actual = PrimeChecker.findPrimesInRange(1, 50);
            assertEquals(expected, actual, "Should find all 15 primes up to 50");
            assertEquals(15, actual.size(), "Should find exactly 15 primes up to 50");
        }
    }

    @Nested
    @DisplayName("Performance and boundary tests")
    class PerformanceTests {

        @Test
        @DisplayName("Should handle larger numbers efficiently")
        void testLargerNumbers() {
            // Test some larger primes - these should complete quickly
            assertTrue(PrimeChecker.isPrime(997), "997 should be prime");
            assertTrue(PrimeChecker.isPrime(1009), "1009 should be prime");
            
            // Test some larger composites
            assertFalse(PrimeChecker.isPrime(1000), "1000 should not be prime");
            assertFalse(PrimeChecker.isPrime(1001), "1001 should not be prime");
        }

        @Test
        @DisplayName("Should find correct number of primes in larger range")
        void testLargerRange() {
            List<Integer> primes = PrimeChecker.findPrimesInRange(1, 100);
            assertEquals(25, primes.size(), "Should find exactly 25 primes between 1 and 100");
            
            // Verify the last few primes in this range
            assertTrue(primes.contains(89), "Should contain 89");
            assertTrue(primes.contains(97), "Should contain 97");
            assertFalse(primes.contains(91), "Should not contain 91");
            assertFalse(primes.contains(93), "Should not contain 93");
        }
    }
}
