import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Card} from 'semantic-ui-react';

export default function LocationCard(props) {
  const {name, type, dimension} = props;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">Type: {type}</span>
        </Card.Meta>
        <Card.Meta>
          <span className="date">Dimension: {dimension}</span>
        </Card.Meta>
      </Card.Content>
   
    </Card>
  );
}

