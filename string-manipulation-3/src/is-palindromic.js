/* exported isPalindromic */

// declare a new variable to hold the string with no whitespace
// loop over the original string
// check if the current letter at the index is not space
// then add it to the variable
// declare an empty variable to hold reversed string
// convert string to an array and assign to new variable
// declare a variable to hold array
// loop through the array and unshift each letter
// join the array to create reversed string
// compare if the reversed string is equal to the original string
// if yes, return true
// if not, return false

function isPalindromic(string) {
  var originalString = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      originalString += string[i];
    }
  }

  var reversedString = '';
  var array = originalString.split('');
  var reversedArray = [];

  for (let i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }
  reversedString = reversedArray.join('');

  if (originalString === reversedString) {
    return true;
  } else {
    return false;
  }
}
