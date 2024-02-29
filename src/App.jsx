import { useState } from 'react'
import './App.css'
import tasksData from './data/tasks.json';
import Task from './Task';

// Get tasks data from json

// Show the list of tasks

// An input and form so a user can create and add a new task, which we then
// see in the list

function App() {
  const [tasks, setTasks] = useState(tasksData);
  const [newTaskInput, setNewTaskInput] = useState("");
  let lastEntry = tasks.length-1

  const addTaskHandler =(event) => {
    event.preventDefault();
    const newTask = { id: tasks[lastEntry].id + 1, description: newTaskInput, completed: false };
    setTasks([ ...tasks, newTask]);
    setNewTaskInput('')
  };

  const handleNewTaskInput = (event) => {
    event.preventDefault();
    setNewTaskInput(event.target.value);
  }

  const handleDeleteTask = (taskToDeleteID) => {
    const updatedTasks = tasks.filter(task => {
      if(task.id === taskToDeleteID) {
        return false;
      } else {
        return true;
      }
    });

    setTasks(updatedTasks);
  }

  const handleCompleteTask = (taskID, taskCompleted) => {
    if (taskCompleted) {
      const updatedTasks = tasks.map(task => {
        const newCompleted = (taskID === task.id) ? false : task.completed;
        return { 
          id: task.id,
          description: task.description,
          completed: newCompleted,
        }
      });
      setTasks(updatedTasks)
    } else {
      const updatedTasks = tasks.map(task => {
        const newCompleted = (taskID === task.id) ? true : task.completed;
        return { 
          id: task.id,
          description: task.description,
          completed: newCompleted,
        }
      });
      setTasks(updatedTasks)
    }
  }

  return (
    <>
      <h1>To-Do:</h1>
      <form>
        <input placeholder={"Enter task description"} onChange={handleNewTaskInput} value={newTaskInput}></input>
        <button onClick={addTaskHandler}>Add Task</button>
      </form>
      
      <ul>
        {tasks.map((task, i) => 
          <Task 
            id={task.id}
            description={task.description}
            completed={task.completed}
            key={i} 
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        )}
      </ul>
      
    </>
  )
}

export default App