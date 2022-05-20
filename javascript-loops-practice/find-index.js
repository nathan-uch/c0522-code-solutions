/* exported findIndex */
function findIndex(array, value) {
  // go over each array index
  for (var i = 0; i < array.length; i++) {
    // if the current value at the array index is equal to the search value
    if (array[i] === value) {
      // return the index of the value
      return i;
    }
  }
  // if no value is equal to the search value, return -1
  return -1;
}
