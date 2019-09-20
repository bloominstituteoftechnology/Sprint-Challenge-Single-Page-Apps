import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { StaticData } from "./staticdata";
import axios from 'axios';
import "../index.css";

const apiLink='https://rickandmortyapi.com/api/character/';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  // setCharacters(staticData);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // setCharacters(StaticData.results);
    axios.get(apiLink).then(res => {
      setCharacters(res.data.results);
    }).catch(e => console.log(e));
  }, []);

  return (
    <div className="character-list">
        {
        characters.map(character => 
          <CharacterCard
            id={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
            gender={character.gender}
            status={character.status}
          />)
        }
    </div>
  );
}
