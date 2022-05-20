/* exported isVowel */

// declare a variable to hold the lowercase of the character
// create an if statement comparing vowels to the variable
// if strictly equals, return true
// if does not equal, return false

function isVowel(char) {
  var lowerCasedChar = char.toLowerCase();
  if (lowerCasedChar === 'a' ||
  lowerCasedChar === 'e' ||
  lowerCasedChar === 'i' ||
  lowerCasedChar === 'o' ||
  lowerCasedChar === 'u') {
    return true;
  }
  return false;
}
