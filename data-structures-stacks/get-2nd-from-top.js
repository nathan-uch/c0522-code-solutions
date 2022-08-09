/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const removed = stack.pop();
  const second = stack.peek();
  if (removed === undefined) return undefined;
  stack.push(removed);
  return second;
}
