import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard.js'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then((res) => {
        setCharacters(res.data.results)
      })
      .catch((err) => {
        console.log('Error: ' + err)
      })

  }, [counter]);

  console.log(characters);

  return (
    <div className="character-container">
      {characters.map(person =>{
        return <CharacterCard image={person.image} name={person.name} species={person.species} location={person.location.name}/>
      })}
    </div>
  );

}
