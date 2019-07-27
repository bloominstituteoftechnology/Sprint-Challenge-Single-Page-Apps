import React from 'react'

import { Card, Icon } from 'semantic-ui-react'

export default function LocationCard ({ location }) {
  return (
    <Card>
    <Card.Content header={location.name} />
    <Card.Content description={location.dimension} />
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {location.residents.length} Residents
      </a>
    </Card.Content>
  </Card>
  )
}