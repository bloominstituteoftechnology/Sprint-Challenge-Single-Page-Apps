import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CCard from './CharacterCard';
export default function CharacterList() {
  const [character, setChar] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setChar(response.data.results)
      })
      .catch(error => {
        console.log(error)
      });
  }, [])
  const { id, name, location, origin, img } = character;
  return <section className='character-list grid-view'>

    <h2>{character.map(e => <CCard data={e} />)}</h2>
  </section>

}
