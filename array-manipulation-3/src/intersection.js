/* exported intersection */

// declare variable to hold final array
// loop through the first original array
// check if the element at the index is in the second array
// if yes, add to final array
// return final array

function intersection(first, second) {
  var finalArray = [];

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      finalArray.push(first[i]);
    }
  }

  return finalArray;
}
