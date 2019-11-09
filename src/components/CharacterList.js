import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((response) => {
      setCharacter(response.data.results);
      console.log(response);
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }, []);

  

  return (
    <section className="character-list">
      <Link to="/"><Button>Home</Button></Link>
      <Link to="/search"><Button>Search</Button></Link>

      {character.map(character => (
        <CharacterCard 
        key={character.id} 
        name={character.name} 
        species={character.species} 
        status={character.status} 
        />
      ))}
    </section>
  );

}
