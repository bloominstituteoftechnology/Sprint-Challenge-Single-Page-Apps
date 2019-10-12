import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharcterCard from './CharacterCard';



  // TODO: Add useState to track data from useEffect

   // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

const CharacterList = props => {
    const [character, setCharacter] = useState([])
  
    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response);
          setCharacter(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);




//       <h2>TODO: `array.map()` over your state here!</h2>
//  
    return (
      <div className ="char-card-box">
      {character.map(character => {
        return <CharcterCard
        key = {character.id}
        character = {character }
        />
      })}
      </div>
    )
  }

export default CharacterList;