import React, { useEffect, useState } from "react";

import axios from "axios";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
        // console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [characters]);

  return (
    <section className="character-list">
      <SearchForm characters={characters} />
    </section>
  );
}
