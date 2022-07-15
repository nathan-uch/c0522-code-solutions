import React from 'react';
import ReactDOM from 'react-dom/client';

function List(props) {
  const pokedex = props.pokedex;
  const pokeList = pokedex.map(pokemon =>
    <li key={pokemon.number}>{pokemon.name}</li>
  );
  return (
    <ul>{pokeList}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const list = <List pokedex={pokedex} />;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(list);
