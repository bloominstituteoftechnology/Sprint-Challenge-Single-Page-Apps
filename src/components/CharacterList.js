import React, { useEffect, useState } from "react";

import axios from "axios";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log("Server Error", error);
        });
    };
    getCharacters();
  }, []);

  return (
    <div className="character-list">
      <SearchForm characters={characters} />
    </div>
  );
}
