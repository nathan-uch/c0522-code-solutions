const fs = require('fs');

const allFiles = process.argv.slice(2, process.argv.length);
let count = 0;

const readAll = () => {
  if (count >= allFiles.length) {
    return;
  }
  fs.readFile(allFiles[count], 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    count++;
    readAll();
  });
};

readAll();
