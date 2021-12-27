const router = require('express').Router();
const fs = require('fs');
const path = require("path");
const db = require('../db/db.json');
const { v4: uuidv4 } = require("uuid");


router.get("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    console.log(notes);
    res.send(notes);
})

router.post("/notes", (req, res) => {
    console.log("in the post routes");
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuidv4();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(delNote));
  res.json(delNote);
  })

module.exports = router;