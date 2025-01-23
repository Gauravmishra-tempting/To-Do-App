import React, { useState } from 'react'

const  Todoapp = () => {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]);
  


  const handleChange = (value) => {
    setInputText(value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!inputText) return;
      
    if (task.includes(inputText)) return;

    setTask((prevTask) => [... prevTask, inputText]);

    setInputText("");

    }
  



  return (
   <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-5">
        <form onSubmit={handleFormSubmit} className="input-form input-group">
        <input type="text" 
        className="form-control" 
        placeholder="Recipient's username" 
        aria-label="Recipient's username" 
        aria-describedby="basic-addon2"
        value= {inputText}
       onChange={(e) => handleChange(e.target.value)} 
        />
        <button 
        className="input-group-text" 
        id="basic-addon2"
        onClick={handleFormSubmit}
        style={{cursor: "pointer"}}
        >
          Add
        </button>
        </form>
      </div>
      <div className="col-md-6 offset-md-3 mt-5">
        <ul className="list-group">
          {task.map((item, index) => (
            <li key={index} className='list-group-item'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Todoapp;