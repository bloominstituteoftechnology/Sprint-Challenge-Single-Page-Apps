import React from "react";

const CharacterCard = props => {
  return (
    <div className="cards">
      <h2> {props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>Location: {props.location}</p>
      <p>Specie: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
    </div>
  );
};

export default CharacterCard;
