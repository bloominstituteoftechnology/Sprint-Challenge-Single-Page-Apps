import React from "react";

export default function CharacterCard(props) {
  console.log("is this card?", props);

  return (
    <div>
      {/* <img src={props.character.image} alt={props.character.name} />
      <p>{props.character.name} </p>
      Location: {props.character.location.name}
      Origin: {props.character.origin.name} */}
    </div>
  );
}
