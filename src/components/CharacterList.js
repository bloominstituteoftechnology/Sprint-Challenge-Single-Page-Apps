import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {

  const [characters, setCharacters] = useState([]);
  // All AJAX/API Requests must run in `useEffect`
  //  Important: verify the 2nd parameter: the dependancies array.
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(results => {
        console.log('page info', results.data.info)
        setCharacters(results.data.results)
      })
  }, [])

  return <section className='character-list grid-view'>
      {characters.map(c => {
        // spread each of the characters values as props into the card component:
        return <CharacterCard key={c.id} {...c} />;
      })}
    </section>

}
