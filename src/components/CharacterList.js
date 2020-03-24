import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        setCharacters(res.data.results);
      })
  }, []);

  console.log(characters);

  return (
    <section className="character-list">
       {characters.map((char) => {
        return (
          <CharacterCard key={char.name} name={char.name} image={char.image} location={char.location} status={char.status} origin={char.origin} />
        )
      })}
    </section>
  );
}
