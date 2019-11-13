import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom"


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data)
      setCharacters(res.data.results)
    }).catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <section className="character-list">
      <h2>Characters</h2>
      {characters.map(character =>(
        <Link to={`/characterlist/${character.id}`}>
         <h3>{character.name}</h3>
         </Link>
      ))}
    </section>
  );
}
