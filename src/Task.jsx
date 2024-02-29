function Task ({ id, description, completed, key, handleDeleteTask, handleCompleteTask }) {
    const taskDescription = `${description}`;
    const deleteTask = () => handleDeleteTask(id);

    const taskCSS = completed ? 'completedtask' : 'incompletetask';

    return (
        <li key={key}>
            <p onClick={() => handleCompleteTask(id, completed)} className={taskCSS}>{taskDescription}</p>
            <button id='delete' onClick={deleteTask}>x</button>
        </li>
    );
}

export default Task;