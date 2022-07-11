const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {

  const sql = `
  select *
  from "grades";`;

  db.query(sql)
    .then(result => {
      const allGrades = result.rows;
      res.json(allGrades);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ ERROR: 'An unexpected error occurrred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const scoreNum = Number(req.body.score);
  if (req.body.name === undefined || req.body.course === undefined || Number.isInteger(scoreNum) === false || scoreNum <= 0) {
    res.status(400).json({ ERROR: 'Invalid or missing values. Name, course and score are required.' });
    return;
  }
  const params = [req.body.name, req.body.course, scoreNum];
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;`;

  db.query(sql, params)
    .then(result => {
      const addedGrade = result.rows[0];
      res.status(201).json(addedGrade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ ERROR: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const updateId = Number(req.params.gradeId);
  const scoreNum = Number(req.body.score);
  if (req.body.name === undefined || req.body.course === undefined || Number.isInteger(scoreNum) === false || scoreNum <= 0) {
    res.status(400).json({ ERROR: 'Invalid or missing values. Name, course and score are required.' });
    return;
  } else if (Number.isInteger(updateId) === false || updateId <= 0) {
    res.status(400).json({ ERROR: 'The grade id is invalid.' });
  }

  const params = [req.body.name, req.body.course, scoreNum, updateId];
  const sql = `
  update "grades"
  set "name" = $1,
  "course" = $2,
  "score" = $3
  where "gradeId" = $4
  returning *;
  `;

  db.query(sql, params)
    .then(result => {
      const updatedGrade = result.rows[0];
      if (!updatedGrade) {
        res.status(404).json({ ERROR: `The grade with ID ${updateId} was not found.` });
      } else {
        res.status(200).json(updatedGrade);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ ERROR: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const deleteId = Number(req.params.gradeId);
  if (Number.isInteger(deleteId) === false || deleteId <= 0) {
    res.status(400).json({ ERROR: 'The grade id is invalid.' });
  }

  const params = [deleteId];
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;
  `;

  db.query(sql, params)
    .then(result => {
      const deletedGrade = result.rows[0];
      if (!deletedGrade) {
        res.status(404).json({ ERROR: `The grade with ID ${deleteId} was not found.` });
      } else {
        res.status(204).json(deletedGrade);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ ERROR: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // console.log('Listening on port 3000');
});
