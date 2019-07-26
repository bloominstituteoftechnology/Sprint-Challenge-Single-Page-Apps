import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function LocationCard({ epi }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{epi.name}</Card.Header>
        <Card.Meta>{epi.air_date}</Card.Meta>
        <Card.Description> {epi.episode}</Card.Description>
      </Card.Content>
    </Card>
  );
}
