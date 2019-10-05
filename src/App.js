import React, { Component } from 'react';

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// components
import Header from './components/Header/Header.jsx';
import Message from './components/Message/Message.jsx';
import Card from './components/Card/Card.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <Card />
    </div>
  );
}

export default App;