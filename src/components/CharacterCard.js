import React from "react";

export default function CharacterCard(props) {
  const { name, status, species, image } = props.character;
  return (
    <div className="character-card">
      <h2>{name}</h2>
      <div className="character-photo">
        <img src={image} alt="" />
      </div>
      <div className="status">
        Status: <em>{status}</em>
      </div>
      <div className="species">
        Species: <em>{species}</em>
      </div>
      <span>todo: character</span>
    </div>
  );
}
