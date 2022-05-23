/* exported isPalindromic */

// remove string spaces and whitespace from the original stirng and assign it to a new variable
// create a variable for the reversed string
// convert string to array and assign to new variable
// loop through the array and unshift each letter
// join the array to create reversed string
// compare if the reversed string is equal to the original string
// if yes, return true
// if not, return false

function isPalindromic(string) {
  var originalString = string.replace(/\s+/g, '');
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
