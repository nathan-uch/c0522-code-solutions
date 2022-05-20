/* exported filterOutStrings */
function filterOutStrings(values) {
  // create an array to hold all non-string values
  var noStrings = [];
  // loop over each value
  for (var i = 0; i < values.length; i++) {
    // check if the type of the value is not a string
    if (typeof values[i] !== 'string') {
      // if the value is not of string type, add it to the array
      noStrings.push(values[i]);
    }
  }
  // return the array with all non-string values
  return noStrings;
}
