import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default function CharacterCard({ data }) {
  return (<Card>
    <Image src={data.image} alt={data.name} />
    <Card.Content>
      <Card.Header>
        {data.name}
      </Card.Header>
      <Card.Meta>
        {data.location.name}
      </Card.Meta>
      <Card.Meta>
        {data.origin.name}
      </Card.Meta>
      <Card.Description>
        {data.created}
      </Card.Description>
    </Card.Content>
  </Card>)
}
