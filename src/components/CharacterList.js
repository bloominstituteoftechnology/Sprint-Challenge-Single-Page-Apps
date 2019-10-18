import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        // console.log(response);
        setCharacterData(response.data.results);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <section className="character-list">
      {characterData.map(character => {
        return (
          <div className="character-card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.gender}</p>
            <p>{character.species}</p>
            <p>{character.status}</p>
          </div>
        );
      })}
    </section>
  );
}
