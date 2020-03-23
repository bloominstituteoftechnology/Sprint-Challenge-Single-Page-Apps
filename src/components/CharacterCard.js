import React from "react";

const CharacterCard = (props) => {
  return (
  <div>
    <p>Name: {props.name}</p>
    <p>Status: {props.status}</p>
    <p>Species: {props.species}</p>
    <p>Type: {props.type}</p> 
  </div>
  );
}

export default CharacterCard;