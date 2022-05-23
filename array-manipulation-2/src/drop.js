/* exported drop */

// declare a new variable to hold final array
// slice the original array starting at count up to length of the array...
// assing the result to the final array
// return final array

function drop(array, count) {
  var finalArray = [];
  finalArray = array.slice(count, (array.length));
  return finalArray;
}
