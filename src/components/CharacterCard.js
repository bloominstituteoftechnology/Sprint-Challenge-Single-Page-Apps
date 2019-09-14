import React from "react";
import styled from 'styled-components';
// import CharacterList from './components/CharacterList';

function CharacterCard (props) {
  const { name, image }=props.character;
    
  
  return (
    <>
    <img src={image} alt={name} />
    <StyledCharacterCard>Character:{name}</StyledCharacterCard>
    </>
    )
  }
  
  const StyledCharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    margin: 0 auto;
  
    `;
  
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

 