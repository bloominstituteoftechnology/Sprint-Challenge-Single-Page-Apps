import React, { useEffect, useState } from "react";
import Axios from "axios";

 function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/
    ')
    .then(response => setCharacter(response.data.results))
    .catch(error => console.error(error))
}, [])

  return (
    <section className="character-list grid-view">
      {characters.map(characters => {
        <div>{characters.name}</div>
      })}

    </section>
  );
}

export default CharacterList;