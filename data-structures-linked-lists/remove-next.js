/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const final = list;
  const third = list.next.next;
  final.next = third;
  return final;
}
