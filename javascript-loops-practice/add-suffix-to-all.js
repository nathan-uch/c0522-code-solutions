/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  // create an array to hold the new words with added suffix
  var suffixed = [];
  // loop over each each word given
  for (var i = 0; i < words.length; i++) {
    // add suffix to each word
    // add the new word to the array
    suffixed.push(words[i] += suffix);
  }
  // return the array containing all new words
  return suffixed;
}
