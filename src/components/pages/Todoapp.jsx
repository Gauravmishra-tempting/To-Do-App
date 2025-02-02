import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line, RiEdit2Line} from "react-icons/ri";

const  Todoapp = () => {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");


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

    const removeTask = (index) => {
      setTask((prevTask) => prevTask.filter((_, i) => i !== index));
    }


// Date and Time 

    useEffect(() => {
     const intervalValid = setInterval(() => {
        const now = new Date();
        const formateDate = now.toLocaleDateString();
        const formateTime = now.toLocaleTimeString();
        setDateTime(`${formateDate} - ${formateTime}`);
      }, 1000);

      return () => clearInterval(intervalValid);
    }, []);


    // Clear all tasks
    const handleClear = () => {
      setInputText("");
      setTask([]);
    };

    // Edit task
   const handleEditButton = () => {
     alert("Edit task");
   }


  return (
   <div className="container">
    <div className="row">
      <div className="col-md-12 text-center mt-5">
        <h1>To-Do App</h1>
      </div>
      <div className="col-md-12 text-center mt-3">
        <h5>{dateTime}</h5>
      </div>
      <div className="col-md-6 offset-md-3 mt-5">
        <form onSubmit={handleFormSubmit} className="input-form input-group shadow">
        <input type="text" 
        className="form-control custom-border" 
        placeholder="Recipient's username" 
        aria-label="Recipient's username" 
        aria-describedby="basic-addon2"
        value= {inputText}
       onChange={(e) => handleChange(e.target.value)} 
        />
        <button 
        className="input-group-text custom-border" 
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
            <li key={index} 
            className='list-group-item mb-4 custom-border shadow'>
              {item}
              <button
              className='delete-btn'
              onClick={() => removeTask(index)}
              >
               <RiDeleteBin6Line />
              </button>
              <button
              className='edit-btn'
               onClick={handleEditButton}
              ><RiEdit2Line/></button>
            </li>
          ))}
          <div className='mx-auto mt-3'>
            <button onClick={handleClear}
            type='button' 
            className="backgroundcolor clearbutton">
              Clear
            </button>
          </div>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Todoapp;