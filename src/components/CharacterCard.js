import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CharacterCard = props => {
  return (
    <Card>
      <Image src={props.image} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
      </Card.Content>
      <Card.Meta>
        <span>{props.species}</span>
      </Card.Meta>
    </Card>
  );
};

export default CharacterCard;
