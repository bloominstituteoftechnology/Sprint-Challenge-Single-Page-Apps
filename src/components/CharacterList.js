import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log("Character is working:", res.data.results);
        setCharacter(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // TODO: Add AJAX/API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  return (
    <section className="character-list grid-view">
      {character.map((props, index) => (
        <CharacterCard
          key={props.id}
          name={props.name}
          status={props.status}
          location={props.location.name}
          species={props.species}
          gender={props.gender}
          image={props.image}
        />
      ))}
    </section>
  );
}
