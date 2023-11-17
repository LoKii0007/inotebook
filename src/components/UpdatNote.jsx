import React, { useState } from 'react'
import NoteContext from "../context/notes/notecontext";
import { useContext } from 'react';

const UpdateNote = (props) => {
    const context = useContext(NoteContext)
    const { updateNote } = context;
    const [update, setUpdate] = useState(false)

    const [note, setNote] = useState({
        title: props.title,
        description: props.description,
        tag: props.tag,
        id: props.id
    })

    const handleUpdate = (e) => {
        e.preventDefault();
        updateNote(note.title, note.description, note.tag, note.id)
        setUpdate(false)
    }

    const onchange = (e) => {
        setNote({
            ...note, [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {update ? (
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">title</label>
                        <input type="text" name='title' className="form-control" id="title" defaultValue={props.title} onChange={onchange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">description</label>
                        <input type="text" name='description' className="form-control" defaultValue={props.description} id="description" onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">tag</label>
                        <input type="text" name='tag' className="form-control" id="description" defaultValue={props.tag} onChange={onchange} />
                    </div>
                    <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate} >update note</button>
                    <button type="submit" className="btn btn-danger" onClick={() => { setUpdate(true) }} >cancel</button>
                </form>
            ) : (
                <button onClick={() => { setUpdate(true) }}>edit note</button>

        )}
        </>
    )
}

export default UpdateNote
