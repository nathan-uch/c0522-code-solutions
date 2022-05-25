/* exported ransomCase */

// create a variable to hold the final string
// loop through the string
// if the string index mod 2 is 0, lowercase it and concatenate to variable
// if not, uppercase it and concatenate to variable
// return variable

function ransomCase(string) {
  var finalString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      finalString += string[i].toLowerCase();
    } else {
      finalString += string[i].toUpperCase();
    }
  }
  return finalString;
}
