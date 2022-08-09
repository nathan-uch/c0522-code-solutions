/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let current = null;
  for (let i = index; i >= 1; i--) {
    current = queue.dequeue();
    if (current === undefined) return undefined;
    if (queue.peek() === undefined) return current;
    queue.enqueue(current);
  }
  current = queue.dequeue();
  return current;
}
