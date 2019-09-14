import React from "react";
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