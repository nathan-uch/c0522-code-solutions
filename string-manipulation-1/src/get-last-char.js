/* exported getLastChar */

// declare a variable to hold the last letter
// get the length of the string using .length method and subtracting 1
// use this value at the index of the string to get the last letter and assign the letter to the variable
// return the variable

function getLastChar(string) {
  var lastLetter = '';
  lastLetter = string[string.length - 1];
  return lastLetter;
}
