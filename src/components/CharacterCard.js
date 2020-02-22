import React from "react";

export default function CharacterCard({image, name, species}) {
  return (
    <div>
      <img src={image}></img>
      <h2>{name}</h2>
      <p>{species}</p>

    </div>
  );
}
