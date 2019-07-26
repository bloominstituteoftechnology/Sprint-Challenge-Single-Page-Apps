import React from 'react'
import { Card } from 'semantic-ui-react'

export default function LocationCard ({ name, type, dimension, id }) {

  return (
    <Card
      header=<a href={`https://rickandmortyapi.com/api/location/${id}`} target='_blank'>{name}</a>
      description={type}
      extra={dimension}
    />
  )
}
