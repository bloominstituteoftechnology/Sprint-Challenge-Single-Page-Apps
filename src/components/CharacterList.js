import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const rtnCharacter = () => {
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results)
        setCharacter(res.data.results)
      })
    }
    rtnCharacter();
  }, []);

  return (
    <section className="character-list">
      {character.map(character => (
                <CharacterCard key={character.id} character={character} />
            ))}
    </section>
  );
}
