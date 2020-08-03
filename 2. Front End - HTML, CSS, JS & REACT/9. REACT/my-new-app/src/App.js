import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My 1st App!
        </h1>
        <ol>
          {order}
        </ol>
      </header>
    </div>
  );
}

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const lista = ['npx create-react-app NOME', 'cd NOME', 'npm start', 'MAGIC'];

const order = lista.map(
  item => task(item)
)


export default App;
