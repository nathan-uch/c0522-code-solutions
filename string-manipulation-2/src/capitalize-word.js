/* exported capitalizeWord */

// COMMENT: I wasn't sure if just returning 'JavaScript' for the special case was cheating...
// COMMENT: ... so I made it the long way

// if the word is javascript, return JavaScript
// if not...
// create a variable by getting the first letter of the word and upper-casing it
// get the remaining letters of the word (excluding the first) and lower case it...
// and assign it to a new variable
// concatenate the first capitalized letter and the rest of the word...
// and assign it to word
// return word

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    word = 'JavaScript';
    return word;
    // var capitalJ = word[0].toUpperCase();
    // var ava = word.substring(1, 4).toLowerCase();
    // var capitalS = word[4].toUpperCase();
    // var cript = word.substring(5, 10).toLowerCase();
    // word = capitalJ + ava + capitalS + cript;
    // return word;
  }

  var firstLetter = word[0].toUpperCase();
  var restOfWord = word.substring(1, word.length).toLowerCase();
  word = firstLetter + restOfWord;
  return word;
}
