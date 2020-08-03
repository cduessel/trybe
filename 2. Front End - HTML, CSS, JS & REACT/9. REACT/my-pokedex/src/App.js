import React from 'react';
import './App.css';
import PokeDex from './pokedex';
// import Pokemons from './data' ;

function App() {
  return (
    <div className="App">
        <h1>PokeDex</h1>
      <section className='pai'>
        <PokeDex/>
      </section>
    </div>
  )
}

export default App;
