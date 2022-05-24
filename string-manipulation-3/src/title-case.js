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
  var titleArray = title.split(' ');
  var finalArray = [];
  for (var i = 0; i < titleArray.length; i++) {
    var currentWord = titleArray[i].toLowerCase();
    if (i === 0 || titleArray[i].length > 4) {
      var wordArray = currentWord.split('');
      var firstLetter = wordArray[0].toUpperCase();
      wordArray.splice(0, 1);
      var restOfWord = wordArray.join('');
      var finalWord = firstLetter + restOfWord;
      finalArray.push(finalWord);
    } else {
      finalArray.push(currentWord);
    }
    finalString = finalArray.join(' ');
  }
  return finalString;
}
