import { useState } from "react";
import noteContext from "./notecontext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "6515ed6a8c431925d09e7b4d",
      user: "6515d93ac9ec873d0b50f41d",
      title: "mern stack chutiya hai",
      description: "loda lassan",
      tag: "personal",
      date: "2023-09-28T21:17:30.749Z",
      __v: 0,
    },
    {
      _id: "65174da8639ccdb87e1dd4b4",
      user: "6515d93ac9ec873d0b50f41d",
      title: "mern stack bahut chutiya hai",
      description: "1",
      tag: "personall",
      date: "2023-09-29T22:20:24.386Z",
      __v: 0,
    },
    {
      _id: "65174fbd1f0a8fa266fa4e74",
      user: "6515d93ac9ec873d0b50f41d",
      title: "mern stack ab bhi chutiya hai",
      description: "loda lassann",
      tag: "personall",
      date: "2023-09-29T22:29:17.511Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;