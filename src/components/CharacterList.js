import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';



  // TODO: Add useState to track data from useEffect

   // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

export default function CharacterList() {
    const [character, setCharacter] = useState([])
  
    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log('character data:', res.data.results);
          setCharacter(res.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);




//       <h2>TODO: `array.map()` over your state here!</h2>
//  
    return (
      <div>
        {character.map(char=> {
        return <CharacterCard key={char.id} char={char} />
        })}
      </div>
    );
}
  