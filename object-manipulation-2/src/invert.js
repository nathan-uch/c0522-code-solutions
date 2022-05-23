/* exported invert */

// declare a variable to hold the final object
// loop through the source properties with a for...in loop
// create new properties using bracket notation of the source properties and...
// assign the property of the source as the value
// return the final object

function invert(source) {
  var finalObj = {};
  for (const prop in source) {
    finalObj[source[prop]] = prop;
  }
  return finalObj;
}
