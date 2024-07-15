import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faTasks} size="2x" />
          <h1 className="text-3xl font-bold">Task Management App</h1>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
