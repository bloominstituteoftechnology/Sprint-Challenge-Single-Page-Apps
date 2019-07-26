import React from 'react';
import { Card } from 'semantic-ui-react';

const EpisodeCard = ({ episode }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Description>
          Air Date: {episode.air_date} <br />
          Episode: {episode.episode}
        </Card.Description>
        <Card.Meta>Characters: {episode.characters.length}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default EpisodeCard;