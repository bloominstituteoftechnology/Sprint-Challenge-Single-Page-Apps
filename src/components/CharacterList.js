import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm.js"

// const CharacterContainer = styled.div `

// `

const CardContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 30px;
  margin-riight: 30px;
`

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
        console.log(response);
        const person = response.data.results
        setCharacters(person)
    })
    .catch(error => {
        console.log("Wubba Lubba DubDub", error);
    });
}, []);


  return (
  <CardContainer className = "card-container">
    {characters.map(object => {
      return <CharacterCard key = {object.name} image = {object.image} name = {object.name} status = {object.status} species = {object.species} gender = {object.gender} />;
      })}
  </CardContainer>
  );
}
