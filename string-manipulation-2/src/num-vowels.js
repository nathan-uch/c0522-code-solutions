/* exported numVowels */

// declare a variable for the vowel counter starting at 0
// declare a variable to hold the string fully lower-cased
// loop through the letters of the string
// check if each letter is strictly equals to (lower-cased) vowels...
// if yes, add to vowel counter
// return vowel counter

function numVowels(string) {
  var vowelCounter = 0;
  var lowerCased = string.toLowerCase();
  for (var i = 0; i < lowerCased.length; i++) {
    if (lowerCased[i] === 'a' || lowerCased[i] === 'e' || lowerCased[i] === 'i' || lowerCased[i] === 'o' || lowerCased[i] === 'u') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
