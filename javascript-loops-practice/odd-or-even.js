/* exported oddOrEven */
function oddOrEven(numbers) {
  // create an array to hold the strings
  var array = [];
  // go over each number in the array
  for (var i = 0; i < numbers.length; i++) {
    // check if the number at the current index is divisible by 2 without a remainder
    if (numbers[i] % 2 === 0) {
      // if it has no remainder, add the string even to the array
      array.push('even');
    } else {
      // if there is a remainder, add the string odd to the array
      array.push('odd');
    }
  }
  // return the array with the strings
  return array;
}
