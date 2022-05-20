/* exported reverse */

// declare a new variable to hold the final array
// loop through each element and adding it to the beginning of the array
// return the final array

function reverse(array) {
  var finalArray = [];
  for (let i = 0; i < array.length; i++) {
    finalArray.unshift(array[i]);
  }
  return finalArray;
}
