/* exported chunk */

// create an array to hold the final array
// calculate the number of arrays required to be create by...
// dividing the length of the input array with the input size and rounding up
// create a number variable to hold the index when iterating through each array element
// loop through the number of arrays determined
// declare a variable and create a new array at each iteration
// create a loop to iterate the same amount as the size input
// create an if statement to check the index is still less than...
// the number of items inside the input array
// if yes, push the element in that index to the current array created
// then increment the array index
// if the current array is full (according to the size loop)
// put the current array in the final array
// when all input array elements are put inside arrays, return the final array

function chunk(array, size) {
  var finalArray = [];
  var numberOfArrays = Math.ceil(array.length / size);
  var arrayIndex = 0;
  for (var i = 0; i < numberOfArrays; i++) {
    var currentArray = [];
    for (var t = 0; t < size; t++) {
      if (arrayIndex < array.length) {
        currentArray.push(array[arrayIndex]);
        arrayIndex++;
      }
    }
    finalArray.push(currentArray);
  }
  return finalArray;
}
