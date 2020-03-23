import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [state, setCharacterState] = useState({});

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      console.log(response);
      setCharacterState(response.data.results);
    });
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
