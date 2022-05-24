/* exported titleCase */

// convert the title into an array separated by spaces
// assign the array to a new variable title array
// loop over the title array at each index
// lower case the word, and assign it to current word
// check if the title array is at index 0...
// or check if the current word length is more than 4
// if yes, capitalize first letter
// check if current word is special case (JavaScript and API)
// capitalize accordingly
// check if
// convert current word array to string inside the title array
//

function titleCase(title) {
  var finalString = '';
  var finishedArray = [];
  var titleArray = title.split(' ');
  var doNotCap = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < titleArray.length; i++) {
    var currentWord = titleArray[i];
    var firstLetter = currentWord[0].toUpperCase();
    var restOfWord = currentWord.substring(1, currentWord.length).toLowerCase();
    var finalWord = firstLetter + restOfWord;

    for (let q = 0; q < doNotCap.length; q++) {
      if (finalWord.toLowerCase() === doNotCap[q] && i !== 0) {
        finalWord = finalWord.toLowerCase();
      }
    }

    if (currentWord.toLowerCase() === 'javascript') {
      finalWord = 'JavaScript';
    } else if (currentWord.toLowerCase() === 'javascript:') {
      finalWord = 'JavaScript:';
    } else if (currentWord.toLowerCase() === 'api') {
      finalWord = 'API';
    } else if (currentWord.includes(':')) {
      // var semicolonIndex = titleArray.indexOf(':');

    }

    finishedArray.push(finalWord);
  }

  finalString = finishedArray.join(' ');
  return finalString;
}
