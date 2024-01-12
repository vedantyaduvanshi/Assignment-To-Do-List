import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy Mac' },
    { id: 2, text: 'Buy Windows' },
  ]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
        
            <button onClick={() => editTask(task.id, prompt('Edit task:', task.text))}>
              Edit
            </button>
          
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
     
      <div>
        <input type="text" id="taskInput" />
        <button onClick={() => addTask(document.getElementById('taskInput').value)}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoList;
