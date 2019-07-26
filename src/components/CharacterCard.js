import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard ({ name, image, location, origin, species, status }) {

  return (
    <Card
      header={name}
      image={image}
      description= {`Last seen: ${location.name}`}
      meta={species}
      extra = {`From: ${origin.name}`}
    />
  )
}
