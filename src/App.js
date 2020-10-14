import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Test from './components/Test';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Test />
      <Greet name="Mbogo"/>
      <Welcome />
      <Message />
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name="Joseph"/>
        <Hello name="Mbote"/>
        
      </header>
    </div>
  );
}

export default App;
