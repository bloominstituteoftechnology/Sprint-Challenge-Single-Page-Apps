import React from "react";
import { Card, CardContent, CardHeader } from "semantic-ui-react";

export default function LocationCard(props) {
  console.log("props", props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.location.name}</Card.Header>
        <Card.Meta>Planet {props.location.dimension}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {props.location.residents.length} Residents
      </Card.Content>
    </Card>
  );
}
