const fs = require('fs');

const file = process.argv[process.argv.length - 1];

fs.readFile(file, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
