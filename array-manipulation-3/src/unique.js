/* exported unique */

// declare variable to hold final array
// add the first item of the original array to the final array
// check length of original array, if it's 0 return an empty array
// loop through original array
// loop through final array
// check if the final array includes the element in the original array at index
// if does not include, add it to the final array
// return the final array

function unique(array) {
  var finalArray = [];
  finalArray.push(array[0]);

  if (array.length === 0) {
    return [];
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < finalArray.length; j++) {
      if (!finalArray.includes(array[i])) {
        finalArray.push(array[i]);
      }
    }
  }

  return finalArray;
}
