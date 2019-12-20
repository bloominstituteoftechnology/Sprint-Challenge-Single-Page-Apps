import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Router, Link, useParams } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(data => {
          setCharacters(data.data.results);
        })
        .catch(error => {
          console.log("You're killing me Smalls", error);
        });
    };
    getCharacters();
  }, []);
  console.log(characters);

  return (
    <div>
      <section className='character-list'>
        setCharacters.map(characters => (
        <CharacterCard
          url={characters.image}
          names={characters.name}
          gender={characters.gender}
          local={characters.location.name}
          species={characters.species}
          status={characters.status}
        />
        ))}
      </section>
    </div>
  );
}
