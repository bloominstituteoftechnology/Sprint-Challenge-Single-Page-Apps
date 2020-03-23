import React from "react";
import CharacterList from "./CharacterList";

export default function CharacterCard(props) {
  return (
    <header>

    <div><img src = {props.character.image}/></div>
      <div>
      <h1> {props.character.name}</h1> 
      <h2> {props.character.gender}</h2>
      <h3> {props.character.species}</h3>
      </div>
    </header>
  );
}
