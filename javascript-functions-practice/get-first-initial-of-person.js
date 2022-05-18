/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  var firstNameArray = person.firstName.split('');
  var initial = firstNameArray[0];
  return initial;
}
