/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let cur = list;
  let prev = null;
  while (cur) {
    prev = cur;
    cur = cur.next;
  }
  prev.next = new LinkedList(value);
  return prev;
}
