import React from 'react';

export default function CharacterCard({
  created,
  episodes,
  gender,
  id,
  image,
  location,
  name,
  origin,
  species,
  status,
  type,
  url,
}) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{`${species} ${status}`}</p>
      <p>{`Location: ${location.name}`}</p>
      <p>{`Origin: ${origin.name}`}</p>
    </div>
  );
}
