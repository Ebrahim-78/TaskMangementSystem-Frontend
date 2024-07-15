import React from 'react';
import Task from './Task';

const Column = ({ column }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-60 space-y-4">
      <h2 className="text-xl font-semibold">
        {column.name} ({column.tasks.length})
      </h2>
      {column.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
