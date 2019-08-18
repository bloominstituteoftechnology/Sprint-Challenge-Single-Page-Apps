import React from "react";
import { Card } from "semantic-ui-react";
export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Name: {props.episode.name}</Card.Header>
        <Card.Meta>Aired: {props.episode.air_date}</Card.Meta>
        <Card.Header>Episode: {props.episode.episode}</Card.Header>
      </Card.Content>
    </Card>
  );
}
