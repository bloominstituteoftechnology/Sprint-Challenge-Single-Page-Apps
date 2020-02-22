import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import SearchForm from "./SearchForm";

const Name = styled.p`
  font-family: 'Nanum Gothic Coding';
  font-weight: 500;
  font-size: 20px;
`

const CharacterListHeader = styled.h2`
  font-family: 'Nanum Gothic Coding';

`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);
  const [ searchResults, setSearchResults ] = useState([])
  const [ search, setSearch ] = useState("")
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((res) => {
        setCharacters(res.data.results)
        setSearchResults(res.data.results)
      })
      .catch((err) => console.log(err))
  }, []);
  console.log(search)
  const activateSearch = e => {
    e.preventDefault()
    const results = characters.filter((character) => character.name.toLowerCase().includes(search.toLocaleLowerCase()))
    setSearchResults(results)
  }
  return (
    <section className="character-list">
      <CharacterListHeader>LIST OF CHARACTERS: </CharacterListHeader>
      <SearchForm search={search} setSearch={setSearch} activateSearch={activateSearch} />
      {searchResults.map((character) => <Name key={character.id}>{character.name.toUpperCase()}</Name>)}
    </section>
  );
}
