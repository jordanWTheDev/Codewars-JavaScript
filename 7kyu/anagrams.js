// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// My answer

// var isAnagram = function (test, original) {
//   test = test.toLowerCase().split("").sort();
//   original = original.toLowerCase().split("").sort();
//   for (let i = 0; i < test.length; i++) {
//     if (test[i] !== original[i] || test.length !== original.length)
//       return false;
//   }
//   return true;
// };

const isAnagram = (test, original) =>
  test.toLowerCase().split("").sort().join("") ===
  original.toLowerCase().split("").sort().join("");
