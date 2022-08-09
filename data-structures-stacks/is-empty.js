/* exported isEmpty */

function isEmpty(stack) {
  const last = stack.peek();
  if (last === undefined) return true;
  return false;
}
