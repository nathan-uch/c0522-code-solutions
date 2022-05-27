var booksArray = [
  {
    isbn: '9780618002245',
    title: 'The Return of the King',
    author: 'J. R. R. Tolkein'
  },
  {
    isbn: '9780399501487',
    title: 'The Lord of the Flies',
    author: 'William Golding'
  },
  {
    isbn: '9780151072552',
    title: 'Animal Farm',
    author: 'George Orwell'
  }
];

console.log('booksArray:', booksArray);
console.log('typeof booksArray:', typeof booksArray);

console.log('JSON stringify booksArray:', JSON.stringify(booksArray));
console.log('typeof JSON stringify booksArray:', typeof JSON.stringify(booksArray));

var studentJSONString = '{ "id": "1", "name": "Sokka" }';

console.log('studentJSONString:', studentJSONString);
console.log('typeof studentJSONString:', typeof studentJSONString);

var studentJSONObj = JSON.parse(studentJSONString);
console.log('student JSON parsed obj:', studentJSONObj);
console.log('type of student JSON object:', typeof studentJSONObj);
