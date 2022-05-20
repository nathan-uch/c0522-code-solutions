/* exported getIndexes */
function getIndexes(array) {
  // create an empty array to hold indexes
  var indexes = [];
  // count the number of values in the given array
  for (var i = 0; i < array.length; i++) {
    // at each count, add the current count to the array
    indexes.push(i);
  }
  // return the array with each count
  return indexes;
}
