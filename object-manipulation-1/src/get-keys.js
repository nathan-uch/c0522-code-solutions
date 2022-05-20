/* exported getKeys */

// declares an empty array to hold keys
// uses for...in loop to go through each key
// adds the key to the array
// return the array

function getKeys(object) {
  var keysArray = [];
  for (const key in object) {
    keysArray.push(key);
  }
  return keysArray;
}
