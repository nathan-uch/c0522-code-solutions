/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstNameArray = person.firstName.split('');
  var lastNameArray = person.lastName.split('');
  var initials = firstNameArray[0] + lastNameArray[0];
  return initials;
}
