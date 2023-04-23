import React from 'react';
import './app.css';
import Login from './components/login/Login';

function App() {
  return (
    <body className="App">
      <header className="header">
        <p className='title'>BEM VINDO!</p>
        <p className='subtitle'>YourTime</p>
      </header>
      <Login/>

    </body>
  );
}

export default App;
