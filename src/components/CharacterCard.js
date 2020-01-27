 import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState} from 'react';

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
    height: 300px;
    display: flex;
    margin: 0 auto;
    border-radius: 15px;
  `

  console.log(characters)

/*   characters.map(character => {
    return (
      <span>  
      <CharCard>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name}/>
      </CharCard>
    </span>)
  }) */

  return (


    <span>  
      <CharCard>
      <h2>{characters.name}</h2>
      <img src={characters.image} alt={characters.name}/>
      </CharCard>
    </span>);

}

