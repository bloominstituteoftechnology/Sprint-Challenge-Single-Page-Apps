import React from "react";

function Character(props) {
  console.log("character props: ");
  const char = props.characters.find(
    thing => thing.id === Number(props.match.params.id)
  );

  return <h1>{char.name}</h1>;
}

export default Character;
