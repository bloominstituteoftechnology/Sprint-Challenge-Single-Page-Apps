import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function LocationCard({locations}) {
  console.log(locations)
  return(
    <Card color='green'>
      <Card.Header>{locations.name}</Card.Header>
      <Card.Description>Type: {locations.type}</Card.Description>
      <Card.Description>Dimension: {locations.dimension}</Card.Description>
      {console.log(locations)}
    </Card>
  );
}

export default LocationCard;
