/* exported getIndexes */

// create an empty array to hold indexes
// count the number of values in the given array
// at each count, add the current count to the array
// return the array with each count

function getIndexes(array) {
  var indexes = [];
  for (var i = 0; i < array.length; i++) {
    indexes.push(i);
  }
  return indexes;
}
