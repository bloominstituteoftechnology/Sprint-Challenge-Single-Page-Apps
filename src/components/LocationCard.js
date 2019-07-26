import React from 'react';
import { Card } from 'semantic-ui-react';

export default function LocationCard({ location /* name, type, dimension, residents */ }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{location.name}</Card.Header>
        <Card.Description>
          {location.type} - {location.dimension}
        </Card.Description>
        <Card.Meta>Residents: {location.residents.length}</Card.Meta>
      </Card.Content>
    </Card>
  );
};
