/* exported difference */

// declare variable to hold final array
// loop through first array and add all elements to final array
// loop through the second array
// check if second array includes the first array's element at each index
// if not included, add it to the array
// if included, declare a variable to hold index at the final array which element was found
// remove it from the final array using the index at final array
// return final array

function difference(first, second) {
  var finalArray = [];

  for (var a = 0; a < first.length; a++) {
    finalArray.push(first[a]);
  }

  for (var i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      finalArray.push(second[i]);
    } else if (finalArray.indexOf(second[i]) >= 0) {
      var removeIndex = finalArray.indexOf(second[i]);
      finalArray.splice(removeIndex, 1);
    }
  }

  return finalArray;
}
