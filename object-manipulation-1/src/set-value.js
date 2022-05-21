/* exported setValue */

// assigns the given value to the given object by creating a new key
// return the whole object

function setValue(object, key, value) {
  object[key] = value;
  return object;
}
