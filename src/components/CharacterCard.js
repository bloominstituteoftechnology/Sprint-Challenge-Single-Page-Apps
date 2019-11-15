import React from "react";

export default function CharacterCard({character}) {
  const {image, name, species, gender, status, origin, episode} = character;
  return (
    <div className="movie-card">
    <img src={image} />
    <h2>{name}</h2>
    <p>Species: {species}</p>
    <p>Gender: {gender}</p>
    <p>Status: {status}</p>
    <p>Episodes featured {episode.length}</p>
</div>
  )
}
