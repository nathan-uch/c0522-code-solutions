/* exported getValues */

// declare an array to store the property values
// use for...in loop to go through each property in the object
// add the property values to the array
// return the array

function getValues(object) {
  var propValues = [];
  for (const prop in object) {
    propValues.push(object[prop]);
  }
  return propValues;
}
