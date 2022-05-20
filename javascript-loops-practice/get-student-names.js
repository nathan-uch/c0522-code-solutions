/* exported getStudentNames */
function getStudentNames(students) {
  // create an array to hold all names
  var names = [];
  // go over each student name inside the objects inside the array
  for (var i = 0; i < students.length; i++) {
    // retrieve the name value of the current student object and add it to the array
    names.push(students[i].name);
  }
  // return the names array containing each name value
  return names;
}
