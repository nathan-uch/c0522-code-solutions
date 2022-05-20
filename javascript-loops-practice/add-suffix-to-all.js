/* exported addSuffixToAll */

// create an array to hold the new words with added suffix
// loop over each each word given
// add suffix to each word
// add the new word to the array
// return the array containing all new words

function addSuffixToAll(words, suffix) {
  var newWords = [];
  for (var i = 0; i < words.length; i++) {
    newWords.push(words[i] + suffix);
  }
  return newWords;
}
