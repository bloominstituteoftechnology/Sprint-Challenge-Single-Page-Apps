import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        setCharacters(res.data.results);
      })
  }, []);

  console.log(characters);
  return (
    <section className="character-list grid-view">
      {characters.map((char) => {
        return (
          <CharacterCard key={char.name} name={char.name} image={char.image} location={char.location} status={char.status} origin={char.origin} />
        )
      })}
    </section>
  );
}
