/* exported filterOutStrings */

// create an array to hold all non-string values
// loop over each value
// check if the type of the value is not a string
// if the value is not of string type, add it to the array
// return the array with all non-string values

function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
