import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Router, Link, useParams  } from "react-router-dom"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
const getCharacters = () => {
  axios.get (`https://rickandmortyapi.com/api/character/`)
  .then (result => {
    setCharacters(result.data)
  })
  .catch (error => {
    console.log("You're killing me Smalls", error)
  });
}

getCharacters();
}, []);

  return (
    <section className="character-list">
      characters.map(char => (
        <CharacterList key={characters.id} characters={characters} />
      ))}
    </section>
  );
      
function CharacterDetails({ characters }) {
  const { id, name, species } = characters
};

