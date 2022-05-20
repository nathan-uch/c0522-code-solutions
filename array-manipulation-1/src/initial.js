/* exported initial */

// declare an empty array to hold the final elements
// use a for loop to go over each element in the original array
// except for the last one by subtracting one from the array length

function initial(array) {
  var finalArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
