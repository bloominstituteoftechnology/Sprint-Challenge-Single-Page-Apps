import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setCharacters(res.data.results);
        setIsLoading(false);
      })
      .catch(err => console.error(err))
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {!isLoading ? characters.map(character => <CharacterCard character={character} />) : (<p>Content is loading...</p>)}
    </section>
  );
}
