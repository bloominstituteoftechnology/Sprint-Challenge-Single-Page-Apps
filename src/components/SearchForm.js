import React, { useState, useEffect } from "react";
import axios from "axios";
// import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const characters = response.data.results.filter(char =>
        char.name.toLowerCase().includes(query.toLowerCase())
      );

      setData(characters);
    });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <form>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />

        <Link to="/">
          <button>Home</button>
        </Link>
      </form>

      {data.map(character => {
        return (
          <CharacterCard
            key={character.id}
            image={character.image}
            name={character.name}
            species={character.species}
            status={character.status}
          />
        );
      })}
    </div>
  );
}
