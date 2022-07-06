const fs = require('fs');
const dataFile = require('./data.json');
const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
  const allNotes = [];
  for (const id in dataFile.notes) {
    allNotes.push(dataFile.notes[id]);
  }
  res.status(200);
  res.json(allNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);
  if (noteId < 1 || isNaN(noteId) === true) {
    res.status(400);
    res.json({ ERROR: 'ID must be a positive number.' });
  } else if (dataFile.notes[noteId] === undefined) {
    res.status(400);
    res.json({ ERROR: `note with ${noteId} not found.` });
  } else {
    res.status(200);
    res.json(dataFile.notes);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const content = req.body;
  if (content.content === undefined) {
    res.status(400);
    res.json({ ERROR: 'Your note does not contain content.' });
  } else {
    const currentNote = content;
    currentNote.id = dataFile.nextId;
    dataFile.notes[dataFile.nextId] = currentNote;
    dataFile.nextId++;
    const newJSONFile = JSON.stringify(dataFile, null, 2);
    fs.writeFile('data.json', newJSONFile, err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ ERROR: 'An unexpected error occurred.' });
      } else {
        res.status(201);
        res.json(newJSONFile);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const delNoteId = Number(req.params.id);
  if (delNoteId < 1 || isNaN(delNoteId) === true) {
    res.status(400);
    res.json({ ERROR: 'ID must be a positive number.' });
  } else if (dataFile.notes[delNoteId] === undefined) {
    res.status(404);
    res.json({ ERROR: `The note with the ID ${delNoteId} does not exist.` });
  } else {
    delete dataFile.notes[req.params.id];
    const newJSONFile = JSON.stringify(dataFile, null, 2);
    fs.writeFile('data.json', newJSONFile, err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ ERROR: 'An unexpected error occurred.' });
      } else {
        res.status(204);
        res.json(newJSONFile);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const editNoteId = Number(req.params.id);
  const newNoteContent = req.body.content;
  if (editNoteId < 1 || isNaN(editNoteId) === true) {
    res.status(400);
    res.json({ ERROR: 'ID must be a positive number.' });
  } else if (newNoteContent === undefined) {
    res.status(400);
    res.json({ ERROR: 'Content is a required field.' });
  } else if (dataFile.notes[editNoteId] === undefined) {
    res.status(404);
    res.json({ ERROR: `The note with the ID ${editNoteId} does not exist.` });
  } else {
    dataFile.notes[editNoteId].content = newNoteContent;
    const updatedNote = dataFile.notes[editNoteId];
    const newJSONFile = JSON.stringify(dataFile, null, 2);
    fs.writeFile('data.json', newJSONFile, err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ ERROR: 'An unexpected error occurred.' });
      } else {
        res.status(200);
        res.json(updatedNote);
      }
    });
  }
});

app.listen(3000, () => {
  // console.log('Listening on port 3000.');
});
