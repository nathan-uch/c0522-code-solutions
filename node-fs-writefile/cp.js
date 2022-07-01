const fs = require('fs');

const newCopy = process.argv[3];
let fileContents = null;

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) throw err;
  fileContents = data + '\n';
  createFunction(fileContents);
});

const createFunction = file => {
  fs.writeFile(newCopy.toString(), file, err => {
    if (err) throw err;
  });
};
