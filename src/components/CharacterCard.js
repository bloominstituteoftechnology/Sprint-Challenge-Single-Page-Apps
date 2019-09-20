import React from "react";

export default function CharacterCard(props) {
  console.log("is this card?", props);

  return (
    <div>
      <p>{props.character.name} </p>
      <p>{props.character.origin.name}</p>
      <img src={props.character.image} />
    </div>
  );
}
