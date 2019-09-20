import React, { useEffect, useState } from "react";

import axios from 'axios'

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);



  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
        console.log(response);
        const person = response.data.results
        setCharacters(person)
    })
    .catch(error => {
        console.log("Wubba Lubba DubDub", error);
    });
}, []);


  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
