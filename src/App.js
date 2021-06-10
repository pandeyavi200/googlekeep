import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Notes from './Notes'
import { useState } from 'react';
function App() {
  const [addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
        setAddItem((prevData)=>{
         return [...prevData,note];
        })
        console.log(note);
  }
  const onDelete=(id)=>{
     setAddItem((oldData)=>
     oldData.filter((curData,indx)=>{
        return indx!=id;
     })
     )
  }
  return (
    <div className="App">
      <Header/>
      <CreateNote passNote={addNote}/>
      <div className="main_area" style={{overflowY: "auto", maxHeight: "335px"}}>
      {
        addItem.map((val,index)=>{
          return(
            <Notes
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            />
          );
        })
      }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
