/* exported filterOutNulls */

// create new array to hold all values that are not null
// go over each value inside the array
// check if the current value is equal to null
// if the value is not equal to null, add it to the array
// return the array with all non-null values

function filterOutNulls(values) {
  var noNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNulls.push(values[i]);
    }
  }
  return noNulls;
}
