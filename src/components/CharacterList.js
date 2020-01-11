import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

const url = 'https://rickandmortyapi.com/api/character/';

export default function CharacterList(props) {
  const [state, setState] = useState([]);
  const [query, setQuery] = useState('');
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get(url).then(response => {
      // Console.log(response.data.results)
      const characters = response.data.results.filter((character) => character.name.toLowerCase().includes(query.toLowerCase()));
      // Const characters = response.results.filter(
      //   character =>
      //   character.name
      //   .toLowerCase()
      //   .includes(query.toLowerCase())
      // );
      setState(characters);
    });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);
  // Const handleInputChange = event => {
  //   setQuery(event.target.value);
  // };

  return (
    

    <section className="character-list">
      <h2>Characters</h2>
      <SearchForm query={query} setQuery={setQuery} />
      {state.map(character => {
        return (
          
          <CharacterCard
            key={character.id}
            name={character.name}
            species={character.species}
          />
        );
      })}
    </section>
    // </div>
  );
}


