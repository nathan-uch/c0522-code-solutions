/* exported flatten */

// declare variable to hold final array
// loop through original array
// check if array at index is an array
// if yes, loop through that array
// and push each value to the final array
// if not an array, simply push value to final array
// return final array

function flatten(array) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    var currentValue = array[i];
    if (Array.isArray(array[i])) {
      for (let p = 0; p < currentValue.length; p++) {
        finalArray.push(currentValue[p]);
      }
    } else {
      finalArray.push(currentValue);
    }
  }
  return finalArray;
}
