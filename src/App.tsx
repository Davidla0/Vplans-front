import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface Tasks {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

function App() {
  const loadTasks = useRef(() => {})
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    loadTasks.current()
  }, [])

  loadTasks.current = async () => {
   const task =  await axios('https://jsonplaceholder.typicode.com/todos')  
   setTasks(task.data)   
  }

  return (
    <div className="tasks-grid">
      {tasks && tasks.map(task => (
        <div key={task.id} className='' style={{background: 'red'}}>
          <h1>{task.title}</h1>
          <p>{task.userId}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
