// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

// Example 1:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// Example 2:
// Input: x = 3, y = 1
// Output: 1

/** Coding Starts from here */

/**
 * Calculate the Hamming distance between two integers.
 *
 * The Hamming distance is defined as the number of positions at which
 * the corresponding bits of the two binary representations differ.
 *
 * @param {number} x - The first integer.
 * @param {number} y - The second integer.
 * @returns {number} The Hamming distance between the two integers.
 */
const hammingDistance = (x, y) => {
    // Convert the two integers x and y to their binary representations.
    x = x.toString(2);
    y = y.toString(2);

    // Ensure both binary strings have the same length by adding leading zeros.
    if (x.length < y.length) {
        while (x.length !== y.length) {
            x = "0" + x;
        }
    }
    // If y's length is less than x's length, add leading zeros to y.
    else {
        while (y.length !== x.length) {
            y = "0" + y;
        }
    }

    // Initialize the Hamming distance counter.
    let hammingDistance = 0;

    // Calculate the Hamming distance by comparing corresponding bits in x and y.
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            hammingDistance++;
        }
    }

    // Return the calculated Hamming distance.
    return hammingDistance;
};

console.log(hammingDistance(1, 4)); // Output 2
console.log(hammingDistance(2, 9)); // Output 3
