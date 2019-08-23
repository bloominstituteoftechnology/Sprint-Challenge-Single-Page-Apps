import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  // console.log(props.character)

  return (
    <Card>
    <Image src={props.character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.character.name}</Card.Header>
        <Card.Meta>
          <span>Species: {props.character.species}</span>
        </Card.Meta>
        <Card.Description>
          Location: {props.character.location.name}
        </Card.Description>
        <Card.Description>
          Origin: {props.character.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Icon name='user' />
          Episodes
      </Card.Content>
    </Card>
  )
}
