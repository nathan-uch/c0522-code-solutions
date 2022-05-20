/* exported reverseWord */

// declare an empty array to hold reversed letters
// create a for loop to go over each letter in the word
// use unshift to add each letter to the beginning of the array
// convert the array into a string and assign to a variable
// return the variable

function reverseWord(word) {
  var wordArray = [];
  for (let i = 0; i < word.length; i++) {
    wordArray.unshift(word[i]);
  }
  var finalReversedWord = wordArray.join('');
  return finalReversedWord;
}
