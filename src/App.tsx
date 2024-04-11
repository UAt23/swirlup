import React from 'react';
import './App.css';
import { Meeting } from './pages/Meeting';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Meeting />
    </div>
  );
}

export default App;
