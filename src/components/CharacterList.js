import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    
      axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setChar(response.data.results);
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
    // }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

   
    }, []);

  
  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {char.map(character => (
        <CharacterCard key={character.id} char={character} /> 
      ))}
    </section>
  );
}


