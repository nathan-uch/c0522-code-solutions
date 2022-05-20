/* exported isLowerCased */

// declare a variable that equals to the word but completely lowercase
// use an if statement to check if the new variable stricly equals to the original word
// if yes, return true
// if no, return flase

function isLowerCased(word) {
  var lowerCasedWord = word.toLowerCase();
  if (word === lowerCasedWord) {
    return true;
  }
  return false;
}
