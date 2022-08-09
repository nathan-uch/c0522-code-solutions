/* exported maxValue */

function maxValue(stack) {
  if (!Number.isInteger(stack.peek())) return -Infinity;
  let largest = stack.peek();
  while (Number.isInteger(stack.peek())) {
    const current = stack.pop();
    if (current > largest) largest = current;
  }
  return largest;
}
