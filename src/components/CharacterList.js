import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard'
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  useEffect(() => {
    const getCharacter = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!	      
        .then(results => {
          console.log('results', results.data.results)
          getCharacter(results.data.results)
        });
      }
      getCharacter();
    }, []);
        
   
  
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  

    return <section className='character-list grid-view'>

    {characters.map(character => {
      	  return <CharacterCard key={character.id} {...character} />;
   })}
 </section>	   
  
  }