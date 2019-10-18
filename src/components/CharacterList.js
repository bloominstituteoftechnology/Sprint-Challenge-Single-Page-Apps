import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import styled from "styled-components";

export default function CharacterList() {
  // Styles
  const CardContainer = styled.section`
  display: flex
  flex-wrap: wrap;
  justify-content: space-around;
  `;

  const CharacterCards = styled.div`
    box-shadow: 1px 3px 3px #000;
    width: 40%;
    text-align: center;
    margin-bottom: 2%;
    padding-top: 1%;
  `;

  // TODO: Add useState to track data from useEffect
  // Sets state for character data and the search results
  const [characterData, setCharacterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageControl, setPageControl] = useState(1);

  const handleChange = event => {
    setSearchQuery(event.target.value);
    // console.log(searchQuery);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pageControl}`)
      .then(response => {
        // console.log(response);
        // Sets the character variable to the response of the API when the results of the search matches the character name
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        );
        setCharacterData(characters);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, [searchQuery || pageControl]);

  return (
    <>
      <SearchForm
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />

      <CardContainer>
        {characterData.map(character => {
          return (
            <CharacterCards key={character.id}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>Gender: {character.gender}</p>
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>
            </CharacterCards>
          );
        })}
      </CardContainer>
      <div className="button-container">
        <button onClick={() => setPageControl(pageControl - 1)}>
          Previous
        </button>
        <button onClick={() => setPageControl(pageControl + 1)}>Next</button>
      </div>
    </>
  );
}
