/* exported sumAll */
function sumAll(numbers) {
  // create a variable for the sum of numbers
  var sum = 0;
  // go over each number
  for (var i = 0; i < numbers.length; i++) {
    // at each number, add it to the current sum and substitute the old sum with the new one
    sum += numbers[i];
  }
  // return the total after going through each number
  return sum;
}
