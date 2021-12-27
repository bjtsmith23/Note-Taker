const router = require('express').Router();
const fs = require('fs');
const path = require("path");
const db = require('../db/db.json');
const { v4: uuidv4 } = require("uuid");


router.get("/notes", (req, res) => {
    db = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
    return res.json(dbFile)
})

router.post("/notes", (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    dbNotes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
    let notesLeft = db.filter(note => {
      return (note.id != req.params.id)
  })
  db = notesLeft
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesLeft))
  res.json(true)
  })

module.exports = router;