/* exported take */

// use slice to remove amount according to count and assing it to
// a new declared variable to hold final array

function take(array, count) {
  var finalArray = array.slice(0, count);
  return finalArray;
}
