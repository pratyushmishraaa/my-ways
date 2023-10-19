// client/src/components/KanbanBoard.js
import React, { useState, useEffect } from 'react';

function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks for the Kanban board
  useEffect(() => {
    // Implement fetching tasks via REST API or WebSocket and update the state
  }, []);

  const handleCreateTask = () => {
   // Implement creating a new task and sending it to the server
   const newTaskData = { title: newTask, description: 'Your description', status: 'To Do' };
   
   // Update tasks state
   setTasks([...tasks, newTaskData]);
 
   // Reset the newTask input
   setNewTask('');
 };
 

  const handleUpdateTask = (taskId, updatedTask) => {
    // Implement updating a task and sending it to the server
  };

  const handleDeleteTask = (taskId) => {
    // Implement deleting a task and sending it to the server
  };

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task._id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.status}</div>
            <button onClick={() => handleUpdateTask(task._id, { status: 'In Progress' })}>Move to In Progress</button>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={handleCreateTask}>Create Task</button>
      </div>
    </div>
  );
}

export default KanbanBoard;
