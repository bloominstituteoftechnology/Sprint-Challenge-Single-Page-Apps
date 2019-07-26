import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function LocationCard({ local }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{local.name}</Card.Header>
        <Card.Meta>{local.dimension}</Card.Meta>
        <Card.Description> {local.created}</Card.Description>
      </Card.Content>
    </Card>
  );
}
