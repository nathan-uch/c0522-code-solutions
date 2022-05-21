/* exported truncate */

// declares new variable to hold final string
// slices the string starting at 0 up to length
// assigns the result to the final string
// concatenates ellipsis to the end of the final string and assigns result to final string
// returns final string

function truncate(length, string) {
  var newString;
  newString = string.slice(0, length);
  newString += '...';
  return newString;
}
