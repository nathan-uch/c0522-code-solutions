var student = {
  firstName: 'Nathan',
  lastName: 'Huang',
  age: 27
};

student.fullName = student.firstName + ' ' + student.lastName;
console.log('value of student.fullName:', student.fullName);

student.livesInIrvine = true;
student.previousOccupation = 'ESL teacher';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'model Y',
  year: 2019
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Tigger',
  type: 'tiger'
};

delete pet.name;
delete pet['type'];
console.log('value of pet:', pet);
