import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { StaticData } from "./staticdata";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState(StaticData.results);

  // setCharacters(staticData);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    setCharacters(StaticData.results);
  }, []);

  return (
    <div className="character-list">
        {
        characters.map(character => 
          <CharacterCard
            id={character.id}
            name={character.name}
            species={character.species}
          />)
        }
    </div>
  );
}
