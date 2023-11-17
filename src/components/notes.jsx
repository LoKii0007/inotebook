import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/notecontext";
import Noteitem from "./Noteitem";
import AddNote from "./addNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, [getNotes]);


  return (
    <>
      <h1>Add notes</h1>
      <AddNote />

      <h1>your notes</h1>

      <div className="container">
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>

    </>
  );
};

export default Notes;
