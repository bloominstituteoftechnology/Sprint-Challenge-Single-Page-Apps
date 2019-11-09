import React from "react";

export default function CharacterCard(props) {
  const { name, species} = props;
  return (
    <div className="character-card">
      <h3>{name}</h3>
      <p>{species}</p>
    </div>
  );
}
