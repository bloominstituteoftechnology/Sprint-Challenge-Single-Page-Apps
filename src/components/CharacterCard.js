import React from "react";

export default function CharacterCard() {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Status: {props.status}</h3>
      <h4>Species: {props.species}</h4>
      <h4>Type: {props.type}</h4>
    </div>
      
  );
}
