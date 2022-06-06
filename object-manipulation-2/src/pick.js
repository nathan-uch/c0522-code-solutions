/* exported pick */

// create a variable to hold final object
// loop through the keys array
// assign current key to a variable
// loop through the input source with a for...in loop
// compare if the property is strictly equal to the current key
// check if the value of the property is not undefined
// if defined, create the property in the final object and assign the value of the input source property value
// return final object

function pick(source, keys) {
  var finalObj = {};
  for (var i = 0; i < keys.length; i++) {
    var currentKey = keys[i];
    for (var prop in source) {
      if (prop === currentKey) {
        if (source[prop] !== undefined) {
          finalObj[prop] = source[prop];
        }
      }
    }
  }
  return finalObj;
}
