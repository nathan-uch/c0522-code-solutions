/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  const first = queue.peek();
  let current = null;
  for (let i = 0; ; i++) {
    current = queue.dequeue();
    if (current === undefined) return undefined;
    if (current <= queue.peek()) return current;
    if (current === first && i > 0) return current;
    queue.enqueue(current);
  }
}
