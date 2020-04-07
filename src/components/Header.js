import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

import styled, { css } from 'styled-components'

const TheHead = styled.header`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  line-height: 2em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

const WorkingSearch = styled.div`
text-align: center;
font-size: 2em;
color: #333;
`

export default function Header() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {

    axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res)
        
        const filtered = res.data.results.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setDisplayData(filtered);
      })
      .catch(err => console.log(err))
  }, [searchTerm])

  return (
    <TheHead>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      {displayData.map(card => (
        <CharacterCard card={card} key={card.id}/>
      ))}
      <Route exact path="/Header/SearchForm"><WorkingSearch><div> --- PLEASE USE THIS SEARCH --- <span><br />(I don't know how to get rid of the other one)</span> </div></WorkingSearch></Route>
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
    </header>
    </TheHead>
  );
}
