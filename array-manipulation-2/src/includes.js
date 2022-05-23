/* exported includes */

// loop over the array
// using if, compare the current array at index value to the input value
// if they are the same, return true
// if the loop ends, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
