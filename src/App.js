import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
    //setClicks( estado => estado + 1)
  }

  return (
    <div>
      <button onClick={handleClick} style={{ border: 'solid 3px', padding: '20px' }}>
        <h1>Sumar: {clicks}</h1>
      </button>
      <button onClick={handleClick} style={{ border: 'solid 3px', padding: '20px', marginLeft: '10px' }}>
        <h1>Restar: {clicks}</h1>
      </button>
    </div>
  );
}
