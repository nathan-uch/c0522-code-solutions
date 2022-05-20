/* exported countdown */

// create an array to hold all numbers in the countdown
// count down one at a time starting from the number given
// each time counted down, add current number to the array
// return array with all numbers from number to zero

function countdown(numbers) {
  var counting = [];
  for (var i = numbers; i >= 0; i--) {
    counting.push(i);
  }
  return counting;
}
