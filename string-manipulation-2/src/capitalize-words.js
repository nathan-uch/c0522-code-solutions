/* exported capitalizeWords */

// declares variable for final string
// declares an array for all words after capitalized
// declares an array with the string values separating elements from space in original string
// loop over each element from the array...
// get the current word at this iteration
// get the first letter and capitalize it storing to a variable
// get the remaining letters and lowercase them storing them in a separate variable
// concatenate two variables
// add the word to the array for words after capitalized
// create a string by join the array with a space between each word assigning it to the final string
// return the final string

function capitalizeWords(string) {
  var finalString = '';
  var finishedArray = [];
  var stringArray = string.split(' ');

  for (var i = 0; i < stringArray.length; i++) {
    var currentWord = stringArray[i];
    var firstLetter = currentWord[0].toUpperCase();
    var restOfWord = currentWord.substring(1, currentWord.length).toLowerCase();
    var finalWord = firstLetter + restOfWord;
    finishedArray.push(finalWord);
  }

  finalString = finishedArray.join(' ');
  return finalString;
}
