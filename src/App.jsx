import React, { useState } from "react";
import taskData from './data/tasks.json'
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(taskData);
  const listName = "To Do List";
  
  const addTask  = (event) => {
    event.preventDefault();
    let userInput = document.getElementById("userInput");
    let newTask = {}
    setTasks([...tasks, newTask])
  }

  const renderTask = (task) => {
    return <p id='task' onClick={completeTask}>ID: {task.id}, {task.description}, COMPLETED: {task.completed ? "Yes" : "No"}</p>;
  }

  const completeTask = (event) => {
    event.target.style.textDecoration = 'line-through'
  }

  const deleteTask = (event) => {
    event.target.parentNode.remove();
  }
  // const addTask = (e) => {
  //   e.preventDefault();
  //   let userInput = document.getElementById("userInput");
  //   let result = document.getElementById("result");
  //   let taskContainer = document.getElementById("taskContainer");
  //   let resultMessage = document.getElementById("resultMessage");
  //   let li = document.createElement('li');
  //   let button = document.createElement('button')
  //   button.innerText = 'x'
  //   button.id = 'delete'
  //   button.addEventListener('click', (event) => {
  //     event.target.parentNode.remove();
  //   })
  //   let p = document.createElement('p')
  //   p.innerText = userInput.value
  //   p.id = 'task'
  //   p.addEventListener('click', (event) => {
  //     event.target.style.textDecoration = 'line-through'
  //   })
  //   li.appendChild(p)
  //   li.appendChild(button)
  //   taskContainer.appendChild(li);
  //   userInput.value = '';
  // };

  return (
    <>
      <h1>{listName}</h1>
      {/* 
      if you are passing an argument to a function you 
      must do it through an arrow function 
      */}
      <form onSubmit={(e) => addTask(e)}>
        <input type="text" id="userInput" />
        <button type="submit">Submit</button>
      </form>
      <div id="result">
        <h3 id='resultMessage'>Add a Task</h3>
        <ul id='taskContainer'>
          {tasks.map((task, i) => <li key={i}>{renderTask(task)}<button id="delete" onClick={deleteTask}>x</button></li>)}
        </ul>
      </div>
    </>
  );
}

export default App;