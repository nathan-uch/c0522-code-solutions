function convertMinutesToSeconds(min) {
  var seconds = min * 60;
  return seconds;
}
console.log('convertMinutesToSeconds result:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
console.log('greet result:', greet('Gollum'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('getArea result:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('getFirstName result:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
console.log('getLastElement result:', getLastElement(['propane', 'and', 'propane', 'accessories']));
