/* exported isAnagram */

// from the original strings
// remove whitespace
// convert to array
// arrange the array alphabetically
// convert back to string
// and assign it back to a variable
// compare if arrays strictly equal each other
// if they do, return true
// if not, return false

function isAnagram(firstString, secondString) {
  var firstArranged = firstString.replace(/\s+/g, '').split('').sort().join();
  var secondArranged = secondString.replace(/\s+/g, '').split('').sort().join();
  if (firstArranged === secondArranged) {
    return true;
  } else {
    return false;
  }
}
