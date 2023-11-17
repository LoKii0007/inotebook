const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Notes = require("../models/Notes");
const { json } = require("react-router-dom");

//ROUTE 1 : get all notes using /api/auth/getuser. login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});


//ROUTE 2 : create notes . login required
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "enter a title of min length 3").isLength({ min: 3 }),
    body("description", "desc cant be blank").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // return errors if any
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    }
     catch (error) {
      console.error(error.message);
      return res.status(500).send("some error occured");
    }
  }
);


//ROUTE 3 : update notes . login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try{
    const { title, description, tag } = req.body;
    const newNote = {};

    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // params header se id lega
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    if (req.user.id !== note.user.toString()) {
      return res.status(401).send("not allowed");
    }
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    return res.status(400).send("some error occured");
  }
});


// ROUTE 4 : delete note. login req
router.delete("/deletenote/:id", fetchuser, async (req, res) => {

  // finding note to be deleted
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    if (req.user.id != note.user.toString()) {
      return res.status(401).send("not allowed");
    }

    deletedNote = await Notes.findByIdAndDelete(req.params.id);
    res.json({ success: "note deleted", note: deletedNote });
  }
   catch (error) {
    console.error(error.message);
    return res.status(400).send("some error occured");
  }
});
module.exports = router;
