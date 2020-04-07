import React from "react";

const CharacterCard = ({card}) => {
  return (
  <div key={card.id}>
    <p>Name: {card.name}</p>
    <p>Status: {card.status}</p>
    <p>Species: {card.species}</p>
    <p>Type: {card.type}</p> 
  </div>
  );
}

export default CharacterCard;