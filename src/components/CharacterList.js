import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {/* <CharacterCard /> */}
      {characters.map(character => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </section>
  );
}
