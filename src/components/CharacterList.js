import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        setCharacter(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="character-list">
      <h2>Characters</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Search">
        <button>Search</button>
      </Link>
      {character.map(characters => {
        return (
          <CharacterCard
            key={characters.id}
            name={characters.name}
            img={characters.image}
            gender={characters.gender}
            species={characters.species}
            status={characters.status}
          />
        );
      })}
    </section>
  );
}
