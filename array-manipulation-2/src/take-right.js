/* exported takeRight */

// declare variable to hold final array
// use if statement to check if array length is less than or equal to count...
// if yes, assign the original array to the final array and return it
// check if the array is empty
// if yes, return an empty array
// declare a variable to count the starting index which is the result of array length minus count
// loop over the array starting at the new index up to the end of the array
// push each item that is iterated into the final array
// return the final array

function takeRight(array, count) {
  var finalArray = [];
  if (array.length <= count) {
    finalArray = array;
    return finalArray;
  } else if (array === []) {
    return [];
  }
  var startingIndex = array.length - count;
  for (let i = startingIndex; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
