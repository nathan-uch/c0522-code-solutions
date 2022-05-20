/* exported getStudentNames */

// create an array to hold all names
// go over each student name inside the objects inside the array
// retrieve the name value of the current student object and add it to the array
// return the names array containing each name value

function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}
