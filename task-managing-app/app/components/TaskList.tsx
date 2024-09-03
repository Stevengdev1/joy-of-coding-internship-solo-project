import React from "react";

type Task = {
    id: number;
    name: string;
    description: string;
    dueDate: string;
};

// This code below defines the props type for the TaskList component
type TaskListProps = {
    tasks: Task[];
  };
  
// TaskList is a functional component that displays a list of tasks.
// This expects an array of task objects passed in via the `tasks` prop.
  const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item p-4 border-b border-gray-300">
            <h3 className="text-xl font-semibold">{task.name}</h3>
            {task.description && <p className="text-gray-600">{task.description}</p>}
            {task.dueDate && <span className="text-sm text-gray-500">Due Date: {task.dueDate}</span>}
          </div>
        ))}
      </div>
    );
  };
  
  export default TaskList;