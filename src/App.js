import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [clicks, setClicks] = useState(0);

  function handleClickSuma() {
    setClicks(clicks + 1);
    //setClicks( estado => estado + 1)
  }

  function handleClickResta() {
    setClicks(clicks - 1);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Cantidad de clicks: {clicks} </h1>
      <button onClick={handleClickSuma} style={{ border: 'solid 3px', padding: '10px' }}>
        <h1>Sumar</h1>
      </button>
      <button onClick={handleClickResta} style={{ border: 'solid 3px', padding: '10px', marginLeft: '10px' }}>
        <h1>Restar</h1>
      </button>
    </div>
  );
}
