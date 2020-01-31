import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Card} from 'semantic-ui-react';

export default function CharacterCard(props) {
  const {name, species, status} = props;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">Species: {species}</span>
        </Card.Meta>
        <Card.Meta>
          <span className="date">Status: {status}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}
