/* exported countdown */
function countdown(numbers) {
  // create an array to hold all numbers in the countdown
  var counting = [];
  // count down one at a time starting from the number given
  for (var i = numbers; i >= 0; i--) {
    // each time counted down, add current number to the array
    counting.push(i);
  }
  // return array with all numbers from number to zero
  return counting;
}
