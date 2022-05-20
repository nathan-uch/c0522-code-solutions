/* exported compact */

// declare an array to hold final array
// loop through each element in the array
// use if loop to check if the current array element is not strictly equal to false and..
// if current element does not strictly equal to null and...
// if current element does not strictly equal to 0 and...
// if current element does not strictly equal to undefined and...
// if current element does not strictly equal to an empty string and...
// if current element is NaN (even if a string or boolean)...
// add it to final array
// return final array

function compact(array) {
  var cleanArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false &&
      array[i] !== null &&
      array[i] !== 0 &&
      array[i] !== undefined &&
      array[i] !== '' &&
      Number.isNaN(array[i]) === false) {
      cleanArray.push(array[i]);
    }
  }
  return cleanArray;
}
