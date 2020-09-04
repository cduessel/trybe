import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  
  const [randomNum, setRandomNum]=useState(8);
  const [winner, setWinner]=useState(false);

  useEffect(()=>{
    setInterval(() => {
      const num = Math.round(Math.random()*100);
      setRandomNum(num);
      (num %3 ===0) ? setWinner(true) : setWinner(false);
    }, 4000);

  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Shuffled number: {randomNum}
        </h3>
        {winner && <h1>You WON!</h1>}
      </header>
    </div>
  );
}

export default App;
