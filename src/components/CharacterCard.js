import React from "react";
import { Link } from "react-router-dom";
import Character from "./Character";


export default function CharacterCard(props) {

  const char = props.character;
  console.log(char)
  return (
    <div>
      <img src={char.image} />
      <p></p>
    </div>
  );
}
