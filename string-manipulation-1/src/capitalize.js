/* exported capitalize */

// declare variable to hold the first letter of the string and capitalize it
// get a new string from the original without the first letter
// lower case all the letters of this string and assign it to another variable
// concatenate the capitalized first letter to the rest of the lower case string
// return final string

function capitalize(string) {
  var firstLetter = string[0].toUpperCase();
  var restOfString = string.substring(1, (string.length)).toLowerCase();
  var finalString = firstLetter + restOfString;
  return finalString;
}
