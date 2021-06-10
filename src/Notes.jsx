import React from 'react';

const Notes=(props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return(<> 
    
       <div className="notes">
       <h1 className="title">{props.title}</h1>
       <div className="disc">{props.content}</div>
       <button className="delete" onClick={deleteNote}>-</button>
       </div> 
       
    </>);
}
export default Notes;