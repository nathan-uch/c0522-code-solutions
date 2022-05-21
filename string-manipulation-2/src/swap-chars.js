/* exported swapChars */

// declare variable to hold letter at first index
// declare variable to hold letter at second index
// declare variable to hold final string
// loop over string concatenating each letter to final string
// if i counter is same as the first index, add letter at second index
// if i counter is same as second index, add letter at first index

function swapChars(firstIndex, secondIndex, string) {
  var aLetter = string[firstIndex];
  var bLetter = string[secondIndex];
  var finalString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      finalString += bLetter;
    } else if (i === secondIndex) {
      finalString += aLetter;
    } else {
      finalString += string[i];
    }
  }
  return finalString;
}
