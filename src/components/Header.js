import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterCard from "./CharacterCard";

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

export default function Header() {
  const [character, setCharacter] = useState([])

  useEffect(() => {

    axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(res => setCharacter(res.data.results))
      .catch(err => console.log(err))
  }, [])

  console.log('CHARACTER: ', character)

  return (
    <TheHead>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      {character.map(card => (
        <>
        <CharacterCard
        key={card.id} 
        name={card.name}
        status={card.status}
        species={card.species}
        type={'No data exists' || card.type}
        />
        </>
      ))}
    </header>
    </TheHead>
  );
}
