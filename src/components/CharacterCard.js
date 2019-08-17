import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import LocationCard from "./LocationCard";

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
        <Card.Meta>{LocationCard}</Card.Meta>
        <Card.Description />
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes
        </a>
      </Card.Content>
    </Card>
  );
}
