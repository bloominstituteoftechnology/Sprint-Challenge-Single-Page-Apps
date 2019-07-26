import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  // TODO: Add AJAX/API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(results => {
        console.log('results', results.data.results)
        setCharacters(results.data.results)
      })
  }, [])

  return <section className='character-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
    </section>

}
