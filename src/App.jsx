import React, { useState } from 'react';
import './app.css';
import Login from './components/login/Login';
import Sigin from './components/sigin/Sigin';

function App() {
  const [isMoved, setIsMoved] = useState(false);
  const [text, setText] = useState('Cadastrar');

  const handleClick = () => {
    setIsMoved(!isMoved);
    setText(isMoved ? 'Fazer Login' : 'Fazer Cadastro');
  };
  
  return (
    <body className="App">
      <header className="header">
        <p className='title'>BEM VINDO!</p>
        <p className='subtitle'>YourTime</p>
      </header>

      
      <div className='container-divs'>
        <div className='divs'>
          <Login />
          <Sigin />
          <div className={`div-sigin ${isMoved ? 'div-sigin-moved' : ''}`} onClick={handleClick}>
            <p className='text-div'>{text}</p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;

