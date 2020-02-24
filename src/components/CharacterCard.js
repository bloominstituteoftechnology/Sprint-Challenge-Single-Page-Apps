import React from "react";

export default function CharacterCard(props) {
  const character = props.characters.find(character => props.match.params.id === `${character.id}` )
  console.log(character)
  return (
    <div>
      <image src={character.image}/>
      <h1>{character.name}</h1>
      <h2>{character.species}</h2>
      <h2>{character.status}</h2>
    </div>
  )
}
