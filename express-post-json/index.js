const express = require('express');
const app = express();

let nextId = 1;
let grades = {};
const allGrades = [];

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(allGrades);
});

app.post('/api/grades', (req, res) => {
  grades = req.body;
  grades.id = nextId;
  nextId++;
  allGrades.push(grades);
  res.status(201);
  res.send(allGrades);
});

app.listen(3000, () => {
  // console.log('Listening port 3000.');
});
