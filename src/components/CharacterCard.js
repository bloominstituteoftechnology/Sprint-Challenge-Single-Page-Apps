import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
  console.log(props);
  return (
    //   // <span>todo: character</span>
    //   <span>
    //     {props.characters.name}
    //     {props.characters.species}
    //   </span>
    // );
    <Card>
      <Image src={props.characters.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.characters.name}</Card.Header>
        <Card.Meta>
          {props.characters.species} {props.characters.status}
        </Card.Meta>
        <Card.Description>
          Location: {props.characters.location.name}
        </Card.Description>
        <Card.Description>
          Origin: {props.characters.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link exact to="/episode">
          <Icon name="user" />
          Episodes
        </Link>
      </Card.Content>
    </Card>
  );
}
