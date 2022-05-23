/* exported dropRight */

// declare a variable to hold the final array with element
// subtract count from array length and assing the result to an index variable
// loop through the array starting at 0 up to the index
// push the input array to the final array
// return final array

function dropRight(array, count) {
  var finalArray = [];
  var index = (array.length - count);
  for (let i = 0; i < index; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
