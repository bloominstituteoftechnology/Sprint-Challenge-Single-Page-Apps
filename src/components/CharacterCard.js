import React from "react";

export default function CharacterCard(props) {
  console.log("is this card?", props);

  return (
    <div>
      <img src={props.character.image} />
      <p>{props.character.name} </p>
      <p>{props.character.origin}</p>
    </div>
  );
}
