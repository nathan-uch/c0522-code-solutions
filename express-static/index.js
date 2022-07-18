const express = require('express');
const path = require('path');
const app = express();

const myPath = path.join(__dirname, 'public');
console.log('path.join():', myPath);

const staticMiddle = express.static(myPath);
console.log('express.static(myPath):', staticMiddle);

app.use(staticMiddle);

app.listen(3000, (req, res) => {
  console.log('Server listening on port 3000.');
});
