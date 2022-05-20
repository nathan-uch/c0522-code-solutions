/* exported isUpperCased */

// declare a new variable that equals to the word fully capitalized
// use an if statement to check if both are strictly equal
// if yes, return true
// if not, return false

function isUpperCased(word) {
  var upperCasedWord = word.toUpperCase();
  if (word === upperCasedWord) {
    return true;
  }
  return false;
}
