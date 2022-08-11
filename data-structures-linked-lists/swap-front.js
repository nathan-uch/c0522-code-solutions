/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const first = list;
  const second = list.next;
  const third = list.next.next;
  second.next = first;
  second.next.next = third;
  return second;
}
