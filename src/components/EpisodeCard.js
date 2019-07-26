import React from 'react'
import { Card } from 'semantic-ui-react'

export default function EpisodeCard ({ id, name, air_date, episode, url }) {

  return (
    <Card
      header=<a href={`https://rickandmortyapi.com/api/episode/${id}`} target='_blank'>{name}</a>
      description={episode}
      extra={air_date}
    />
  )
}
