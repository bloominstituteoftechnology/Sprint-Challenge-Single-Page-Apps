import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(results => {
        console.log('page info', results.data.info)
        setCharacters(results.data.results)
      })
  })

  return <section className='character-list'>
      {characters.map(c => {
        return <CharacterCard {...c} />;
      })}
    </section>

}
