/* exported findIndex */

// go over each array index
// if the current value at the array index is equal to the search value
// return the index of the value
// if no value is equal to the search value, return -1

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
