import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function LocationCard(props) {
  console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.location.name}</Card.Header>
        <Card.Meta>{props.location.type}</Card.Meta>
        <Card.Description>{props.location.dimension}</Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        {props.location.residents.map(resident => (
          <em>{resident}</em>
        ))}
      </Card.Content> */}
    </Card>
  );
}
