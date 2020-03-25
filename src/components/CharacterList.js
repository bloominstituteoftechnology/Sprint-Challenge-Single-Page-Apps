import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CharWrap = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function CharacterList() {
  const [char, searchChar] = useState([]);
  const [search, characterSearch] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response);
        const name = response.data.results.filter(x =>
          x.name.toLowerCase().includes(search.toLowerCase())
        );
        searchChar(name);
      })
      .catch(err => console.log(err));
  }, [search]);

  const changeHandler = e => {
    e.preventDefault();
    characterSearch(e.target.value);
  };

  return (
    <section>
      <form className="search">
        <input
          className="searchTerm"
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={search}
          onChange={changeHandler}
        />
        <button type="submit" className="searchButton">
          Go
        </button>
      </form>

      <CharWrap>
        {char.map(character => (
          <CharacterCard
            key={character.id}
            image={character.image}
            name={character.name}
            gender={character.gender}
            status={character.status}
            species={character.species}
          />
        ))}
      </CharWrap>
    </section>
  );
}
