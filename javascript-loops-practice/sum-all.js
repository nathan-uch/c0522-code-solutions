/* exported sumAll */

// create a variable for the sum of numbers
// go over each number
// at each number, add it to the current sum and substitute the old sum with the new one
// return the total after going through each number

function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
