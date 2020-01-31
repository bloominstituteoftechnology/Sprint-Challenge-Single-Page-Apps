import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log("API here", response);
        setData(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="character-list">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Search">
        <button>Search</button>
      </Link>
      {data.map(character => (
        <CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
          status={character.status}
        />
      ))}
    </section>
  );
}
