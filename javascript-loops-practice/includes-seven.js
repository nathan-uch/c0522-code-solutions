/* exported includesSeven */
function includesSeven(array) {
  // loop over each array index
  for (var i = 0; i < array.length; i++) {
    // if the array at the current index is equal to 7...
    if (array[i] === 7) {
      // return true
      return true;
    }
  }
  // if none of the values in the array equal to 7, return false
  return false;
}
