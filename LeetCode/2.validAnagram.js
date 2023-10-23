// 242. Valid Anagram - Easy
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/** Coding Starts Here */

// The first approach isAnagramBasicApproach Beats 47.06% of users in Javacript in Runtime and 15.87% of users in Javacript in Memory.
/**
 * Check if two strings are anagrams using a basic approach.
 *
 * An anagram is a word or phrase formed by rearranging the letters of another.
 * In this function, we compare two strings 's' and 't' to determine if they are anagrams.
 *
 * @param {string} s - The first input string.
 * @param {string} t - The second input string to compare with the first.
 * @returns {boolean} True if 's' and 't' are anagrams, false otherwise.
 */
const isAnagramBasicApproach = (s, t) => {
    // Convert both strings to arrays of characters, sort them, and then join them back into strings.
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    // Compare the sorted strings to determine if they are anagrams.
    return s === t;
};

// The second approach in isAnagramOptimizedApproach Beats 79.95%of users with JavaScript in Runtime and Beats 88.17%of users with JavaScript in Memory.
/**
 * Check if two strings are anagrams using an optimized approach.
 *
 * An anagram is a word or phrase formed by rearranging the letters of another.
 * This function compares two input strings 's' and 't' to determine if they are anagrams.
 *
 * @param {string} s - The first input string to check for anagrams.
 * @param {string} t - The second input string to compare with the first.
 * @returns {boolean} True if 's' and 't' are anagrams, false otherwise.
 */
const isAnagramOptimizedApproach = (s, t) => {
    // First we compare the length of two strings, if they are not the same, return false.
    if (s.length !== t.length) {
        return false;
    }

    // Create two objects to count the number of occurrences of each character in both strings.
    const obj1 = {};
    const obj2 = {};

    // Count the occurrences of characters in the first string 's'.
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    }

    // Count the occurrences of characters in the second string 't'.
    for (let i = 0; i < t.length; i++) {
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    // Compare the character counts in both objects. If they are not the same, return false.
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // If all character counts match, the strings are anagrams, so return true.
    return true;
};
