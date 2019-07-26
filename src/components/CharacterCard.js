import React from 'react'

export default function CharacterCard ({ name, image, location, origin, species, status }) {

  return (
    <div>
      {name}
      {image}
      {location.name}
      {origin.name}
      {species}
    </div>
  )
}
