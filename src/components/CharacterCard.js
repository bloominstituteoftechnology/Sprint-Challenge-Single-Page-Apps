import React from "react";
// import CharacterList from './components/CharacterList';

function CharacterCard(props) {
  const { name }=props.character;
  return <span>Character:{name}</span>;
}

export default CharacterCard;