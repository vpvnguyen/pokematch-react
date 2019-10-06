import React, { Component } from 'react';

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// components
import Header from './components/Header/Header.jsx';
import Message from './components/Message/Message.jsx';
import Game from './components/Game/Game.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <Game />
    </div>
  );
}

export default App;