import React, { useContext } from 'react'
import NoteContext from '../context/notes/notecontext';
import UpdateNote from "./UpdatNote"

const Noteitem = (props) => {
    const context = useContext(NoteContext)
    const {deletenote} = context
    const { note } = props;
    
    return (
        <> 
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <button onClick={()=>{deletenote(note._id)}}>delete note</button>
                    <UpdateNote id={note._id} title={note.title} description={note.description} tag={note.tag} />
                </div>
            </div>
        </>
    )
}

export default Noteitem
