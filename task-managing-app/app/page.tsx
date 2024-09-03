// app/page.tsx
"use client";

import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';

interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks/getTasks'); // Call the API route
        const data = await response.json(); // Parse the JSON response
        setTasks(data); // Update the state with the fetched tasks
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks(); // Execute the fetch function
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
