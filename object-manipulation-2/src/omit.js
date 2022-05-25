/* exported omit */

// declare a new variable to hold the final object
// loop through the input source's properties and add them to the final obj
// loop over the properties in the new variable object
// loop over the keys input
// check if the property in the new variable obj is the same as the key at current index
// if yes, delete the property from the object
// return the final object

function omit(source, keys) {
  var finalObj = {};
  for (var inputProp in source) {
    finalObj[inputProp] = source[inputProp];
  }

  for (var property in finalObj) {
    for (var i = 0; i < keys.length; i++) {
      if (property === keys[i]) {
        delete finalObj[property];
      }
    }
  }
  return finalObj;
}
