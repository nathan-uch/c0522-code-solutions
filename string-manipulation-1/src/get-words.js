/* exported getWords */

// declare an empty array to hold the words
// use if statement to check if the string is empty
// if it's empty, return the empty array
// if not empty, split the string at each space and assing the result to array
// return array

function getWords(string) {
  var array = [];
  if (string === '') {
    return array;
  }
  array = string.split(' ');
  return array;
}
