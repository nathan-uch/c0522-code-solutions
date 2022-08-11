function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Medical School:', medicalSchool('Nathan Huang'));
console.log('Law School:', lawSchool('Nathan Huang'));
