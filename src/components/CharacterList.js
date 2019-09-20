import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [chars, setChars] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setChars(response.data);
        })
        .catch(error => {
          console.error('Where are the characters?', error);
        });

  }, []);

  if (!chars) {
    return <div>Loading character information...</div>;
  }

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {chars.map(charList => {
        return (
          <CharacterCard 
          characters={characters}
          location={location}
          episodes={episodes}
            />
        )
      })}
      
    </section>
  );
};



