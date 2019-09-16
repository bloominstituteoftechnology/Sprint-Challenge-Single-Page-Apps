import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard.js'

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          setCharacters([...res.data.results]);
        })
        .catch(error => {
          console.log('error',error)
        })
  }, []);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


  return (
    <section className="character-list grid-view">
      <div>{characters.map(character => (
        <CharacterCard key={character.id} characters={character}/>
      ))}
      </div>
    </section>
  );
}
