import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  // console.log(props.character.name);

  return (
    <Card>
      <Image src={props.character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.character.name}</Card.Header>
        <Card.Meta>{`Created: ${props.character.created}`}</Card.Meta>
        <Card.Description>{props.character.species}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <em>{props.character.location.name}</em>
      </Card.Content>
    </Card>
  );
}
