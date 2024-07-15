import React from 'react';
import Column from './Column';

const Board = () => {
  const columns = [
    {
      id: 1,
      name: 'To Do',
      tasks: [
        {
          id: 1,
          name: 'Build UI for onboarding flow',
          completedTasks: 1,
          totalTasks: 3,
        },
        {
          id: 2,
          name: 'Build UI for search',
          completedTasks: 0,
          totalTasks: 1,
        },
        { id: 3, name: 'Build settings UI', completedTasks: 0, totalTasks: 2 },
        {
          id: 4,
          name: 'QA and test all major user journeys',
          completedTasks: 0,
          totalTasks: 2,
        },
      ],
    },
    {
      id: 2,
      name: 'Doing',
      tasks: [
        {
          id: 5,
          name: 'Design settings and search pages',
          completedTasks: 2,
          totalTasks: 3,
        },
        {
          id: 6,
          name: 'Add account management endpoints',
          completedTasks: 2,
          totalTasks: 3,
        },
        {
          id: 7,
          name: 'Design onboarding flow',
          completedTasks: 0,
          totalTasks: 1,
        },
        {
          id: 8,
          name: 'Add search endpoints',
          completedTasks: 1,
          totalTasks: 2,
        },
        {
          id: 9,
          name: 'Add authentication endpoints',
          completedTasks: 1,
          totalTasks: 2,
        },
        {
          id: 10,
          name: 'Research pricing points of various competitors and trial different business models',
          completedTasks: 1,
          totalTasks: 3,
        },
      ],
    },
    {
      id: 3,
      name: 'Done',
      tasks: [
        {
          id: 11,
          name: 'Conduct 5 wireframe tests',
          completedTasks: 1,
          totalTasks: 1,
        },
        {
          id: 12,
          name: 'Create wireframe prototype',
          completedTasks: 1,
          totalTasks: 1,
        },
        {
          id: 13,
          name: 'Review results of usability tests and iterate',
          completedTasks: 3,
          totalTasks: 3,
        },
        {
          id: 14,
          name: 'Create paper prototypes and conduct 10 usability tests with potential customers',
          completedTasks: 2,
          totalTasks: 2,
        },
        { id: 15, name: 'Market discovery', completedTasks: 1, totalTasks: 1 },
        {
          id: 16,
          name: 'Competitor analysis',
          completedTasks: 2,
          totalTasks: 2,
        },
        {
          id: 17,
          name: 'Research the market',
          completedTasks: 1,
          totalTasks: 1,
        },
      ],
    },
  ];

  return (
    <div className="flex space-x-4 p-6">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
};

export default Board;
