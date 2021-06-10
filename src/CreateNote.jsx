import React, { useState } from 'react';

const CreateNote=(props)=>{
    const [note,setNote]=useState({
        title:'',
        content:'',
    })
    const inputEvent=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        setNote((prevData)=>{
            return{
            ...prevData,
            [name]:value,
            };
        })
        console.log(note)
    }
    
    const onSubmits=(event)=>{
        event.preventDefault();
    }
    const addEvent=()=>{
       props.passNote(note);
       setNote({
        title:'',
        content:'',
       })
    }
    return(<> 
       <div className="main_note">
       <form action="" onSubmit={onSubmits}>
         <input type="text" value={note.title} name="title" onChange={inputEvent} placeholder="Title"  />
         <textarea className="content" name="" value={note.content} name="content" onChange={inputEvent} id="" cols="" rows="5" placeholder="Write a note..." ></textarea>
          <button className="add" onClick={addEvent}> + </button>
         </form>
       </div>
    </>);
}
export default CreateNote;