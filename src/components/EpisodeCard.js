import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function EpisodeCard(props) {
  // console.log(props.character.name);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.episode.name}</Card.Header>
        <Card.Meta>{`Created: ${props.episode.created}`}</Card.Meta>
        <Card.Description>{props.episode.air_date}</Card.Description>
      </Card.Content>
    </Card>
  );
}
