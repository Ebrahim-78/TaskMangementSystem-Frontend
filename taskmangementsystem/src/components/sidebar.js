import React, { useState } from 'react';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-10 pt-12 pl-5">Dashboard</h1>

        <button className="mt-10 w-full py-2.5 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Create New Board
        </button>
      </div>
      <div>
        <div className="flex items-center justify-between py-4 border-t border-gray-700">
          <span>Dark Mode</span>
          <button
            onClick={toggleDarkMode}
            className={`w-10 h-5 flex items-center bg-gray-400 rounded-full p-1 duration-300 ease-in-out ${
              darkMode ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
