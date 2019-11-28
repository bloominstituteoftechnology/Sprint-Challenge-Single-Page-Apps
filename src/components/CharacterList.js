import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from "axios";


const initialCharacterList = []
const url = "https://rickandmortyapi.com/api/character/";

export default function CharacterList() {
  const [charactersList, setCharactersList] = useState(initialCharacterList)

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setCharactersList(res.data.results);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])

  return (
    <section className="character-list">
      {
        charactersList.map(character => 
          (
            <CharacterCard 
            key={character.id} 
            name={character.name}
            status={character.status}
            species={character.species}
            
            />
          )
        )
      }
    </section>
  );
}
