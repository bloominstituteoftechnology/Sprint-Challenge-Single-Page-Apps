import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CharacterList(props) {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.error("You're killing me Smalls!", error);
      });
  }, []);

  return (
    <section className='character-list'>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/Search'>
        <button>Search</button>
      </Link>
      {character.map(char => (
        <CharacterCard
        character={char}
          
        />
        // <img src={character.thumbnail} alt={character.name} />
      ))}
    </section>
  );
}
