import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character/')
    
        .then(res => {
            setCharacterData(res.data.results)
        })
        .catch(err => console.log(err));

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])


  const { name, species, status, image, gender } = characterData;

  return <section className='character-list grid-view'>

      <h2>{characterData.map((character, index) => <CharacterCard       
      image={character.image}
      name= {character.name}
      species= {character.species}
      gender= {character.gender}
      status= {character.status}
      
       />)}</h2>
    </section>

}
