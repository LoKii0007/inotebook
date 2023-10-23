import React, { useContext, useState } from "react";
import noteContext from "../context/notes/notecontext";

const Home = () => {
  const context = useContext(noteContext);
  const {notes, setNotes}= context

  return (
    <div>
      <h1>Add notes</h1>
      {notes.map((note) => {
        return note.title;
      })}
    </div>
  );
};

export default Home;
