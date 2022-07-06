const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const allGrades = [];
  for (const id in grades) {
    allGrades.push(grades[id]);
  }
  res.json(allGrades);
});

app.post('/api/grades', (req, res) => {
  const currentGrade = req.body;
  currentGrade.id = nextId;
  grades[nextId] = currentGrade;
  nextId++;
  res.status(201);
  res.send(currentGrade);
});

app.listen(3000, () => {
  // console.log('Listening port 3000.');
});
