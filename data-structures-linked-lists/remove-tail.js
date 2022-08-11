/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return list;
  let current = list;
  let ahead = list.next;
  while (ahead.next != null) {
    current = current.next;
    ahead = ahead.next;
  }
  current.next = null;
  return current;
}
