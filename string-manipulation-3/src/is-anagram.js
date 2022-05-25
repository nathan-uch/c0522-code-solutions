/* exported isAnagram */

// declare two variables, one for each string
// loop through each string and if the letter at the index is not a space...
// concatenate to the variable
// convert each variable to arrays, arrange the arrays alphabetically
// convert back to strings, and assign it back to a variable
// compare if arrays strictly equal each other
// if they do, return true
// if not, return false

function isAnagram(firstString, secondString) {
  var firstArray = '';
  var secondArray = '';

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstArray += firstString[i];
    }
  }

  for (let j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondArray += secondString[j];
    }
  }

  var firstArranged = firstArray.split('').sort().join();
  var secondArranged = secondArray.split('').sort().join();

  if (firstArranged === secondArranged) {
    return true;
  } else {
    return false;
  }
}
