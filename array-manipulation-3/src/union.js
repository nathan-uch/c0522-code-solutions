/* exported union */

// declare variable to hold final array
// loop through the first array and add to final array
// loop through the second array checking if the element at index is inside the...
// final array
// if not included, add it
// return final array

function union(first, second) {
  var finalArray = [];

  for (var i = 0; i < first.length; i++) {
    finalArray.push(first[i]);
  }

  for (var w = 0; w < second.length; w++) {
    if (!finalArray.includes(second[w])) {
      finalArray.push(second[w]);
    }
  }

  return finalArray;
}
