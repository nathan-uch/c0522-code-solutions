/* exported reverseWords */

// declare a variable to hold final reversed string
// convert string to an array at each space and assign to a variable
// declare variable to hold reversed words array
// loop through the array made from the string
// at each index of the array:
//       1. convert current element in the array to an array at each letter
//       2. reverse the array
//       3. conver the reversed array back to a string
// assign the result to a variable
// add the variable to the reversed array variable
// convert the reversed array variable to a string separating each element with a space
// return the final reversed string

function reverseWords(string) {
  var finalRevString = '';
  var array = string.split(' ');
  var reversedArray = [];
  for (var i = 0; i < array.length; i++) {
    var currentWord = array[i].split('').reverse().join('');
    reversedArray.push(currentWord);
  }
  finalRevString = reversedArray.join(' ');
  return finalRevString;
}
