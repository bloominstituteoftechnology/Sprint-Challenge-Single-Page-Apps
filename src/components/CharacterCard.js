import React from "react";

export default function CharacterCard() {
  const { id } = props.match.params
  const person = prop.characters.find(character => character.id === id);
  return <span>todo: </span>;
}
