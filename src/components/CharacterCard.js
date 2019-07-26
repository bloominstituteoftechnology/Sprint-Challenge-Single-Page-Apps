import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function CharacterCard ({ name, image, location, origin, species, status, type, episodes }) {
  const episodesCount = (
    <a href='#'>
      <Icon name='user' />
      {episodes} Episodes
    </a>
  )
  return (<Card
    image={image}
    header={name}
    meta={`${species} ${type} ${status}`}
    description={`Location: ${location.name} Origin: ${origin.name}`}
    extra={episodesCount}
  />
  )
}
