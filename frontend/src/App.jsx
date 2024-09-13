import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Topbar from './components/Topbar';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Topbar /> {/* Add Topbar */}
      <div className="flex flex-grow">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
