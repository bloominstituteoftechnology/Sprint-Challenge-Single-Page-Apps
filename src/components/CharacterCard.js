import React from "react";

export default function CharacterCard({ name, image}) {
  return (
    <div>
      <img src={image} alt='rick & morty characters'/>
      <p>Name: {name}</p>
    </div>
  );
}