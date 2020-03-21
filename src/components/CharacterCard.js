import React from "react";

export default function CharacterCard(props) {
  console.log(props)
  return <span>
    <img src={props.char.image}></img>
    <h2>{props.char.name}</h2>
    <h4>{props.char.gender}</h4>
    <h4>{props.char.status}</h4>
  </span>;
}
