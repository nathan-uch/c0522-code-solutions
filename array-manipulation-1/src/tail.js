/* exported tail */

// declare an array to hold final array
// create a for loop to go through each element in the original array
// push each looped element into the array...
// starting at the 2nd element by setting the counter at 1 instead of 0
// return the array

function tail(array) {
  var finalArray = [];
  for (let i = 1; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
