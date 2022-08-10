/* exported getLength */

function getLength(list) {
  let count = 0;
  let copy = list;
  while (copy) {
    count++;
    copy = copy.next;
  }
  return count;
}
