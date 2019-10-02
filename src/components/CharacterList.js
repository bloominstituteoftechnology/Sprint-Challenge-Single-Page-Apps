import React, { useEffect, useState } from "react"
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res);
        const person = res.data.results
        setCharacters(person)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="card-container">
      {characters.map(object => {
        return <CharacterCard key={object.name} image={object.image} name={object.name} status={object.status} species={object.species} gender={object.gender} />;
      })}
    </div>
  )
}