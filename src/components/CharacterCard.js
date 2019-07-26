import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard ({ name, image, location, origin, species, status, id }) {

  return (
    <Card
      header=<a href={`https://rickandmortyapi.com/api/character/${id}`} target='_blank'>{name}</a>
      image={image}
      description= {`Last seen: ${location.name}`}
      meta={species}
      extra = {`From: ${origin.name}`}
    />
  )
}
