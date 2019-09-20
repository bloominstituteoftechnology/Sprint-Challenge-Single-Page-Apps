import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  console.log("characters", characters);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharachters = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          setCharacters(response.data.results);
          console.log(response.data);
        })
        .catch(error => {
          console.log("Server Error", error);
        });
    };

    getCharachters();
  }, []);

  return (
    <section className="character-list">
      <h2>HERE's A CHARACTER: TODO: `array.map()` over your state here!</h2>
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </section>
  );
}

function CharacterDetails({ character }) {
  return <CharacterCard character={character} />;
}

export default CharacterList;
