const fs = require('fs');

let currentFile = null;

for (var i = 2; i < process.argv.length; i++) {
  currentFile = process.argv[i];
  fs.readFile(currentFile, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
