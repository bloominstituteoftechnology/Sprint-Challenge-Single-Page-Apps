import React from "react";
import styled from 'styled-components';
// import CharacterList from './components/CharacterList';

function CharacterCard (props) {
  const { name }=props.character;
  
  return (
    <span>Character:{name}</span>
  )
}

export default CharacterCard


  // const cardImg;

  // < Card >
  // <img src="https://rickandmortyapi.com/api/character/avatar/" />
  // <Card.Content>
  //   <Card.Header>{character.name}</Card.Header>
  //   <Card.Meta>{location}</Card.Meta>
  //   <Card.Episode>{episode}</Card.Episode>

  // </Card.Content>
  // </Card >

  const StyledCharacterCard = styled.character`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 0 auto;

  `;