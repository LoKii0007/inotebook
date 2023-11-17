import React, { useState } from 'react'
import NoteContext from "../context/notes/notecontext";
import { useContext } from 'react';

const AddNote = () => {
    const context = useContext(NoteContext)
    const { addNote } = context;

    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: ""
    })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setNote({
            title: "",
            description: "",
            tag: ""  
        })
    }

    const onchange = (e) => {
        setNote({
            ...note, [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" name='title' className="form-control" id="title" value={note.title} onChange={onchange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type="text" name='description' className="form-control" id="description" value={note.description}  onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">tag</label>
                    <input type="text" name='tag' className="form-control" id="tag" value={note.tag}  onChange={onchange} />
                </div>
                <button type="submit" disabled={note.title.length<2 || note.description.length<5} className="btn btn-primary" onClick={handleClick} >Add note</button>
            </form>
        </>
    )
}

export default AddNote
