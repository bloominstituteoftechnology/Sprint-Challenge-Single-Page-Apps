import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';

const url = 'https://rickandmortyapi.com/api/character/';

export default function App() {
  const [state, setState] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get(url).then(response => {
      // Console.log(response.data.results)
      const characters = response.data.results;

      setState(characters);
    });
  }, []);
  
  return (
    <main>
      <Header />
      <div>
        <div>
          <SearchForm
            state={state}
            setState={setState}
            characters={characters}
            setCharacters={setCharacters}
          />
        </div>
        <CharacterList
          state={state}
          setState={setState}
          characters={characters}
          setCharacters={setCharacters}
        />
      </div>
    </main>
  );
}
