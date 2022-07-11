const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const isEven = num => {
  if (num % 2 !== 0) {
    return false;
  }
  return num > -1;
};

const greaterThan5 = num => {
  if (num > 5) {
    return num;
  }
};

const firstLetterE = name => {
  if (name.startsWith('E')) {
    return name;
  }
};

const containsD = name => {
  if (name.includes('D') || name.includes('d')) {
    return name;
  }
};

const evenNumbers = numbers.filter(isEven);
const overFive = numbers.filter(greaterThan5);
const startWithE = names.filter(firstLetterE);
const haveD = names.filter(containsD);

// console.log('evenNumbers:', evenNumbers);
// console.log('overFive:', overFive);
// console.log('starWithE:', startWithE);
// console.log('haveD:', haveD);
