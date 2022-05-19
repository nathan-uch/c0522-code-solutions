/* exported countdown */
function countdown(numbers) {
  var counting = [];
  for (var i = numbers; i >= 0; i--) {
    counting.push(i);
  }
  return counting;
}
