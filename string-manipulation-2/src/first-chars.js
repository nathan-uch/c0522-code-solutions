/* exported firstChars */

// check if the length is greater than the string length...
// if yes, simply return the full original string
// if not...
// declare a variable to hold the final string
// loop through the string using the length in the condition
// concatenate each string letter to final string
// return final string

function firstChars(length, string) {
  if (length > string.length) {
    return string;
  }
  var finalString = '';

  for (var i = 0; i < length; i++) {
    finalString += string[i];
  }
  return finalString;
}
