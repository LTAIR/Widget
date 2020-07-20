import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Copy from './Components/Copy';
import Modals from './Components/Modal';

function App() {
  return (
    <div className="App">
      <Copy />
      <Modals />
    </div>
  );
}

export default App;
