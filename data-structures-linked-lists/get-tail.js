/* exported getTail */

function getTail(list) {
  let tail = list;
  let prev = null;
  while (tail) {
    prev = tail;
    tail = tail.next;
  }
  return prev.data;
}
