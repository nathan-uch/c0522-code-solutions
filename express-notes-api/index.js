const express = require('express');
const dataFile = require('./data.json');
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
    res.status(201);
    const currentNote = content;
    currentNote.id = dataFile.nextId;
    dataFile.notes[dataFile.nextId] = currentNote;
    dataFile.nextId++;
    res.json(currentNote);
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
    res.status(204);
    delete dataFile.notes[req.params.id];
    res.json();
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
    res.status(200);
    dataFile.notes[editNoteId].content = newNoteContent;
    res.json(dataFile.notes[editNoteId]);
  }
});

app.listen(3000, () => {
  // console.log('Listening on port 3000.');
});
