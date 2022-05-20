/* exported toObject */

// declare an empty obj
// assign the second element in the key value pair array...
// to the newly declared property from the key value pair...
// at the index 0 from the new object
// return the object

function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
