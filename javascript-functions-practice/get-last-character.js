/* exported getLastCharacter */
function getLastCharacter(string) {
  var array = string.split('');
  var lastIndex = array.length - 1;
  var lastCharacter = array[lastIndex];
  return lastCharacter;
}
