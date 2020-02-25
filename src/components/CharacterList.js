import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const uRL = 'https://rickandmortyapi.com/api/character/';
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get(uRL)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.error(error));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(characters);
  return (
    <div>
      <SearchForm characters={characters} />
    </div>
  );
}
