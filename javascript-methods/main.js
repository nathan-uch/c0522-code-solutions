var a = 25;
var b = 14;
var c = 41;
var maximumValue = Math.max(a, b, c);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Spider-man', 'Wolverine', 'Batman', 'Green Lantern'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkein'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  },
  {
    title: 'The Art of War',
    author: 'Sun Tzu'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Nathan Huang';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
