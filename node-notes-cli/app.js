const fs = require('fs');
const jsonFile = require('./data.json');

const command = process.argv[2];

const read = () => {
  for (const note in jsonFile.notes) {
    console.log(`${note} : ${jsonFile.notes[note]}`);
  }
};

const addRemoveUpdate = data => {
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
};

if (command === 'read') {
  read();
} else if (command === 'create') {
  const newNote = process.argv[3];
  jsonFile.notes[jsonFile.nextId] = newNote;
  jsonFile.nextId++;
  const finalJsonFile = JSON.stringify(jsonFile, null, 2);
  addRemoveUpdate(finalJsonFile);
} else if (command === 'delete') {
  const deleteId = process.argv[3];
  delete jsonFile.notes[deleteId];
  const finalJsonFile = JSON.stringify(jsonFile, null, 2);
  addRemoveUpdate(finalJsonFile);
} else if (command === 'update') {
  const updateId = process.argv[3];
  const updatedNote = process.argv[4];
  jsonFile.notes[updateId] = updatedNote;
  const finalJsonFile = JSON.stringify(jsonFile, null, 2);
  addRemoveUpdate(finalJsonFile);
}
