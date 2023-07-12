import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks+1)
    //setClicks( estado => estado + 1)
  }

  return (
    <button onClick={handleClick} style={{ border: 'solid 3px', padding: '20px' }}>
      <h1>Contador de clicks: {clicks}</h1>
    </button>
  );
}
