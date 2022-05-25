/* exported zip */

// declare variable to hold the final array of arrays
// declare two other variables for the length of each argument
// compare the lengths to get the shortest one assign to variable
// or if both lengths are the same, get any
// loop through each array at the length (shortest)
// declare variable to hold current array
// push each element at that index into array
// push the array into the final array
// return the final array

function zip(first, second) {
  var finalArray = [];
  var lengthFirst = first.length;
  var lengthSecond = second.length;
  var arrLength = null;

  if (lengthFirst > lengthSecond || lengthFirst === lengthSecond) {
    arrLength = lengthSecond;
  } else if (lengthFirst < lengthSecond) {
    arrLength = lengthFirst;
  }

  for (let i = 0; i < arrLength; i++) {
    var currentArr = [];
    currentArr.push(first[i]);
    currentArr.push(second[i]);
    finalArray.push(currentArr);
  }

  return finalArray;
}
