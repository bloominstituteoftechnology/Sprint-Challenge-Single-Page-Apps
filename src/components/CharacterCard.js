import React from "react";

export default function CharacterCard(props) {
  return <span>
    <h2>Character: {props.character}</h2>
    <br />
    <img src={props.image} alt="rick and morty picture"/>
    <br />
    </span>
}
