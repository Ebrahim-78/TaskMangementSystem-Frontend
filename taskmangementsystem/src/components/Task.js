import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <h3 className="text-lg font-medium">{task.name}</h3>
      <p className="text-sm text-gray-400">
        {task.completedTasks} of {task.totalTasks} completed tasks
      </p>
    </div>
  );
};

export default Task;
