import React from 'react';
import { Card, Label } from 'semantic-ui-react';

export default function EpisodeCard({ episode }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Meta>
          <span>{episode.episode}</span>
        </Card.Meta>
        <Card.Description>
          {episode.characters.length} characters
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label attached='bottom right'>Air date: {episode.air_date}</Label>
      </Card.Content>
    </Card>
  )
}
