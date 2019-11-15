import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard({ image, name, species }) {
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
      <Card.Meta>
        <span>{species}</span>
      </Card.Meta>
    </Card>
  );
}
