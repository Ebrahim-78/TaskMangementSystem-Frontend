import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Board from './components/board';
import Sidebar from './components/sidebar';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-white">
            <Header />
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Board />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
