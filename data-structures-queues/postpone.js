/* exported postpone */

function postpone(queue) {
  const post = queue.dequeue();
  if (post === undefined) return undefined;
  queue.enqueue(post);
}
