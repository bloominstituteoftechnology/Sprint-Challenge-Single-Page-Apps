import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard(props) {

const [ characters, setCharacters ]  = useState([]) 
useEffect(() => {
  //const id = characters.id;
  axios
  .get(`https://rickandmortyapi.com/api/character/`)
  .then(response => {
    console.log(response.data.results)
    setCharacters(response.data.results)
  })
  .catch(err => {
    console.log(err)
  })
  }, []);

  const CharCard = styled.div `
    background: lightgrey;
    width: 29%;
    display: flex;
    margin: 0 auto;
    border-radius: 15px;
    justify-content: space-around;
  `

  console.log(characters);

  return (
    <span>  
      <Link to='/'>Home</Link>
      {characters.map((character, i) => {
        return (
        <CharCard key={i} value={character.name}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name}/>
        </CharCard>
        )
      })
      }
    </span>
  )
}
