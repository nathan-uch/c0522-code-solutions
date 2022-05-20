/* exported filterOutNulls */
function filterOutNulls(values) {
  // create new array to hold all values that are not null
  var noNulls = [];
  // go over each value inside the array
  for (var i = 0; i < values.length; i++) {
    // check if the current value is equal to null
    if (values[i] !== null) {
      // if the value is not equal to null, add it to the array
      noNulls.push(values[i]);
    }
  }
  // return the array with all non-null values
  return noNulls;
}
