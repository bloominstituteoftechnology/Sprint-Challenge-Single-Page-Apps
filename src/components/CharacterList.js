import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

// Styled Styling
const MainContainer = styled.div`
  text-align: center;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState(" ");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
        // console.log(response);
      })
      .catch(error => {
        console.log("This is error", error);
      });
  }, [search]);

  // Search
  const handleChange = event => {
    setSearch(event.target.value);
  };

  const filteredCharacters = () => {
    characters.filter(character => {
      character.name.toLowerCase().includes(search.toLowerCase());
    });
  };
  return (
    <MainContainer>
      <section>
        <h2>CHARACTERS</h2>
        {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        {/* <SearchForm characters={characters} /> */}
        <SearchForm
          placeholder="search characters"
          handleChange={handleChange}
        />
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
        <CharacterCard search={filteredCharacters} />
      </section>
    </MainContainer>
  );
}
