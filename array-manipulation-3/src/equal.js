/* exported equal */

// check if the length of first and second both equal to 0 (empty array)
// if yes, return true
// if not...
// check if the first length does not equal to second length
// if lengths not equal, return false
// declare variable to hold amount of equal values
// loop over the first array
// if the first at index is strcitly equal to second at index, increment amount of equal values
// if amount of equal values equals to the first length and the second length, return true
// if not, return false

function equal(first, second) {
  if (first.length === 0 && second.length === 0) {
    return true;
  } else if (first.length !== second.length) {
    return false;
  }

  var equalValues = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      equalValues++;
      if (equalValues === first.length && equalValues === second.length) {
        return true;
      }
    }
  }
  return false;
}
