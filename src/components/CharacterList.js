import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([])
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("error", error)
      });
  }, []);


  return (
    <section className="character-list">
      {/* //TODO: `array.map()` over your state here! */}
      <h1> Characters </h1>
      {character.map((characters, index) => {
        return (
          <CharacterCard
            key={index}
            name={characters.name}
            status={characters.status}
            species={characters.species}
            image={characters.image}
          />
        );
      })}

    </section>
  );
}
