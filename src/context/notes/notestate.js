import { useState } from "react";
import NoteContext from "./notecontext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  //fetching notes using api
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
    });

    const json = await response.json();
    console.log(json);

    //editing in ui
    setNotes(json);
  };

  // adding notes using api
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        console.log("error adding notes");
      } else {
        const json = await response.json();

        //editing in ui
        console.log("added new note : ", +json.savedNote);
        setNotes(notes.concat(json));
      }
    } catch (error) {
      console.log(error);
    }
  };


  // deleting notes usnig api
  const deletenote = async (id) => {
    console.log("deleting note : " + id);
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token":localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        console.log("error deleting notes");
      } else {
        const json = await response.json();
        console.log(json);
      }
    } catch (error) {
      console.log(error);
    }

    // editing in ui
    const newnotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnotes);
  };


  // updating notes using api
  const updateNote = async (title, description, tag, id) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        console.log("error adding notes");
      } else {
        const json = await response.json();
        console.log("updated note : ", + json._id);
      }
    } catch (error) {
      console.log(error);
    }

    // editing in ui

    let newNotes= JSON.parse(JSON.stringify(notes))

    for (let i = 0; i< notes.length ; i++) {
      if (notes[i]._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deletenote, getNotes, updateNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
