/* exported titleCase */

// declare variable for the final string to be returned from the function (at the end)
// declare variable for finished array
// create an array from the title by spliting each value at each space
// create an array with all words that are not supposed to be capitalized
// create a variable to decide if the next word is to be capitalized for certain exceptions (colons)
// LINE 17: loop through the title array
//          declare variable to hold the current word which is the current looped string
//          uppercase the first letter of the current word and assign to new variable first letter
//          cut the first letter and lower case the remaining letters of the word and assign to new variable
//          join the first capitalized letter and the lower cased rest of word and assign to final word
// LINE 28: loop through array with words that are not to be capitalized
//          check if: a) the lower cased final word equals to iterating word
//                    b) and if it's not the first letter of the title
//                    c) and if it's not a special case (word after colon)
//          if true, lowercase the whole word and change variable to which the next word doesn't need to be capitalized
// LINE 40: check if the final word includes a colon
//          if it does, change capitalize next word to true
//          if not, check if it is a word following a colon (through variable true)
//          if it is, capitalize first letter of word and lower case remaining letters...
//          join both and assign to final word
//          revert variable to check if word is after colon to false
//          check if word includes a hyphen
//          if true, split the word on the hyphen assigning array to new variable
//          from the new array, retrieve the second word and assign to new variable
//          uppercase the first letter and join to lower cased remaining letters
//          join the array with a hyphen and convert to string assigning back to final word
// LINE 67: check for special case of word being javascript, javascript with colon or api
//          assign final word to correctly capitalized JavaScript and API
// add final word to the finished array variable
// when loop through each word, convert the array to a string separated by spaces
// return the final string

function titleCase(title) {
  var finalString = '';
  var finishedArray = [];
  var titleArray = title.split(' ');
  var doNotCap = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var needCapNext = false;

  for (var i = 0; i < titleArray.length; i++) {
    var currentWord = titleArray[i];
    var firstLetter = currentWord[0].toUpperCase();
    var restOfWord = currentWord.substring(1, currentWord.length).toLowerCase();
    var finalWord = firstLetter + restOfWord;

    for (let q = 0; q < doNotCap.length; q++) {
      if (finalWord.toLowerCase() === doNotCap[q] && i !== 0 && needCapNext === false) {
        finalWord = finalWord.toLowerCase();
        needCapNext = false;
      }
    }

    if (finalWord.includes(':')) {
      needCapNext = true;
    } else if (needCapNext === true) {
      firstLetter = currentWord[0].toUpperCase();
      restOfWord = currentWord.substring(1, currentWord.length).toLowerCase();
      finalWord = firstLetter + restOfWord;
      needCapNext = false;
    } else if (finalWord.includes('-')) {
      var hyphenWord = finalWord.split('-');
      var secondWord = hyphenWord[1];
      firstLetter = secondWord[0].toUpperCase();
      restOfWord = secondWord.substring(1, secondWord.length).toLowerCase();
      hyphenWord[1] = firstLetter + restOfWord;
      finalWord = hyphenWord.join('-');
    }

    if (currentWord.toLowerCase() === 'javascript') {
      finalWord = 'JavaScript';
    } else if (currentWord.toLowerCase() === 'javascript:') {
      finalWord = 'JavaScript:';
    } else if (currentWord.toLowerCase() === 'api') {
      finalWord = 'API';
    }

    finishedArray.push(finalWord);
  }

  finalString = finishedArray.join(' ');
  return finalString;
}
