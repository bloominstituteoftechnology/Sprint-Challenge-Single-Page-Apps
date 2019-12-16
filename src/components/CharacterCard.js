import React from "react";

const CharacterCard = props => {
  return (
    <div className="grid-view">
    <div className="character-card">
      <h1>{props.name}</h1>
        <p>{props.species}</p>
        <p>{props.gender}</p>
    </div>
    </div>
  )
}


export default CharacterCard;
