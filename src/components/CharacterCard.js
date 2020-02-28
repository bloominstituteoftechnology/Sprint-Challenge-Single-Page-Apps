import React from "react";

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

const CharacterCard = props => {
  return (
    <div>
      <h1>Character</h1>
      <h2>Name: {props.name}</h2>
      <h3>Species: {props.species}</h3>
    </div>
  )
}

export default CharacterCard;
