import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characterData, setCharacterData] = useState();

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character/')
    
        .then(res => {
            setCharacterData(res.data.results)
        })
        .catch(err => console.log(err));

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])


  const { id, name, location, origin, img } = characterData;

  return <section className='character-list grid-view'>

      <h2>{characterData.map((character, index) => <CharacterCard character={character} key={index} />)}</h2>
    </section>

}
