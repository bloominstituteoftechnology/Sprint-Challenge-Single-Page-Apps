import React from "react";
import { Card, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.char.image} wrapped-ui="false" />
      <Card.Content>
        <Card.Header><h2>{props.char.name}</h2></Card.Header>
        <Card.Meta>
          Gender: {props.char.gender}
        </Card.Meta>
        <Card.Meta>
          Species: {props.char.species}
        </Card.Meta>
        <Card.Meta>
          Location: {props.char.location.name}
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}
