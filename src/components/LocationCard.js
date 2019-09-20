import React from "react";
import { Card, Label } from 'semantic-ui-react';

 const LocationCard = ({ location }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{location.name}</Card.Header>
        <Card.Description>{location.type} - {location.dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label attached='bottom right'>{location.residents.length} residents</Label>
      </Card.Content>
    </Card>
  );
}

export default LocationCard
