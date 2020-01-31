import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Card} from 'semantic-ui-react';

export default function EpisodeCard(props) {
  const {name, air_date, episode} = props;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">Air Date: {air_date}</span>
        </Card.Meta>
        <Card.Meta>
          <span className="date">Episode: {episode}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}


