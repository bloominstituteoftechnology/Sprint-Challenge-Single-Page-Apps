import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList( props ) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState( [] );
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/')
        .then( response => {
          console.log(response.data)
          setCharacter(response.data);
        })
        .catch( error => {
          console.error( error ); 
        });
    }
    getCharacters();
  }, []);

  return (
    <section className="character-list">
         
    </section>
  );
}
