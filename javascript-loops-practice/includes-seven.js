/* exported includesSeven */

// loop over each array index
// if the array at the current index is equal to 7...
// return true
// if none of the values in the array equal to 7, return false

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
