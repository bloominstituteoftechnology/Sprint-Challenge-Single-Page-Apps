import React from 'react'

export default function CharacterCard(props) {
  const { image, name, species, status, location, origin } = props;
    return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="species-status">
        <p>{species} {status}</p>
      </div>
      <p>Location: {location.name}</p>
      <p>Origin: {origin.name}</p>
    </div>
  )
}
