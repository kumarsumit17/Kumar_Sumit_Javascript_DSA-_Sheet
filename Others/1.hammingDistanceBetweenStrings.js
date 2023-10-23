// Question 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

const hammingDistanceBetweenTwoStrings = (str1, str2) => {
  // to calculate hamming distance between two strings the length of both strings has to be equal, if not we throw an error.
  if (str1.length !== str2.length)
    throw new Error("The length of both strings must be equal");
  let hammingDistance = 0;
  for (let i = 0; i < str1.length; i++) {
    // We loop through both the strings 1 and 2 and compare each characters, if they don't match we increase the hammingDistance by 1.
    if (str1[i] !== str2[i]) hammingDistance++;
  }

  // Finally we return the hamming distance after comparing both strings
  return hammingDistance;
};

console.log(hammingDistanceBetweenTwoStrings("hello", "hwllr")); //2
console.log(hammingDistanceBetweenTwoStrings("hello", "hello")); //0
