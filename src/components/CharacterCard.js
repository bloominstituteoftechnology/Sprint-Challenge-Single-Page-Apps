import React from "react";

export default function CharacterCard(props) {
  const { name, species, gender} = props.character;
  return (
    <div className="character-card">
      <h3>{name}</h3>
      <p>{species}</p>
      <p>{gender}</p>
    </div>
  );
}
