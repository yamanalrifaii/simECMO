import React from 'react';
import Dashboard from "./components/Dashboard"
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="bg-dark-default text-text-primary font-poppins min-h-screen w-full bg-gray-100">
      <NavBar /> 
      <Dashboard />
    </div>
  );
}

export default App;