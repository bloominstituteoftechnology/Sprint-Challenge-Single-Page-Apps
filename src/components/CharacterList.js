import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter]= useState({});


  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(apiObject => {
      console.log ('apiObject', apiObject);
      setCharacter(apiObject.results.location)
    }
    )
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>{character.map}</h2>
    </section>
  );
}

export default CharacterList;