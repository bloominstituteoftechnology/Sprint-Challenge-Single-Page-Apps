import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard'
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
   
      axios.get('https://rickandmortyapi.com/api/character/')
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!	      
        .then(res => {
          
          setCharacters(res.data.results)
        });
      
     
    }, []);
        
   
  
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  

    return (<section className='character-list grid-view'>

    {characters.map(character => {
      console.log(character)
      	  return <CharacterCard key={character.id} {...character} />;
   })}
 </section>	   
    )
  }