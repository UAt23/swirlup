import React from 'react';
import './App.scss';
import { Meeting } from './pages/Meeting';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Meeting />
    </div>
  );
}

export default App;
