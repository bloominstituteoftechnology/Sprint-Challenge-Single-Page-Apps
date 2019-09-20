import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

// const CharacterContainer = styled.div `

// `

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
        console.log(response);
        const person = response.data.results
        setCharacters(person)
    })
    .catch(error => {
        console.log("Wubba Lubba DubDub", error);
    });
}, []);


  return (
  <div>
    {characters.map(object => {
      return <CharacterCard key = {object.name} name = {object.name} status = {object.status} species = {object.species} gender = {object.gender} />;
      })}
  </div>
  );
}
