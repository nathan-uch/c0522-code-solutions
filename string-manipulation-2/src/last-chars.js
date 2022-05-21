/* exported lastChars */

// check if length is greater than string length...
// if yes, return the full original string
// check if the length is 1...
// if yes, return the last letter of the string
// declare variable to hold final string
// declare variable for the starting index which is the string length minus given length
// loop over the string starting at starting index...
// concatenate the letters to the final string
// return the final string

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  } else if (length === 1) {
    return string[string.length - 1];
  }
  var finalString = '';
  var startingIndex = string.length - length;
  for (var i = startingIndex; i < string.length; i++) {
    finalString += string[i];
  }
  return finalString;
}
