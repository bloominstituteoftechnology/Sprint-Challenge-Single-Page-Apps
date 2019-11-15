import React from "react";

export default function CharacterCard(props) {
  return(
    <div>
      <h1>Character Name:{props.char.name}</h1>
      <img src={props.char.image} alt="rick and morty image" />
    </div>
  );
}
