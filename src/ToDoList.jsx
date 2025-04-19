import React from "react";
import { useState, useEffect } from "react";
import MyOption from "./MyOption";
import DescriptionBar from "./DescriptionBar";
import "./App.css";

/**
 * * this is the simple to do list function;
 */
function ToDoList() {
  const [tasks, newTasks] = useState([]);
    
  
  const [toDo, setToDo] = useState("");



  function handleChange(e) {
    setToDo(e.target.value);
  }

  function addTask() {
    if (toDo.trim() !== "") {
      newTasks((prevTasks) => [...prevTasks, toDo]);
      setToDo("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    newTasks(updatedTasks);
  }

/**
 * * optional feature to move the tasks up and down in the list.
 
  function moveToDoUp(index) {
    const updatedTasks = [...tasks];
    if (index > 0) {
      const temp = updatedTasks[index - 1];
      updatedTasks[index - 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      newTasks(updatedTasks);
    }
  }

  function moveToDoDown(index) {
    const updatedTasks = [...tasks];
    if (index < tasks.length - 1) {

      const temp = updatedTasks[index + 1];
      updatedTasks[index + 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      newTasks(updatedTasks);
    }
  }
*/
  return (
   
      <div className="content inter">
       
          <h1 className="text-4xl pt-8 text-center font-semibold text-white">
            Simple To Do List
          </h1>
          <div className="text-center my-4 rounded-lg py-6 input-container">
            <input
              className="focus:outline-none border-b-2 border-blue-500 px-2 py-1"
              type="text"
              placeholder="Enter a Task"
              value={toDo}
              onChange={handleChange}
            />
            <br />
            <button
              className="add-button cursor-pointer font-semibold text-white rounded px-8 mt-6"
              onClick={addTask}
            >
              Add
            </button>
            </div>
        
        <div className="tasks-container rounded-lg pb-6">
        <h2 className="text-left p-4 font-semibold text-xl">To Do List</h2>
        <DescriptionBar />

        <div className="list-container">
          <ol className="list-decimal list-inside">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="p-4 task-list flex border-grey border-b my-2"
              >
                <span className="text">{task}</span>
                <MyOption />
                <span className="buttons-container text-right">
                  <button
                    className="delete-button cursor-pointer mx-2"
                    aria-label="delete"
                    onClick={() => deleteTask(index)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                 
                </span>
              </li>
            ))}
          </ol>
        </div>
        </div>
      </div>
   
  );
}

export default ToDoList;
