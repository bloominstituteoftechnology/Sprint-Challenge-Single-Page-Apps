import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";


function EpisodeCard({episodes}) {
  console.log(episodes)
  return(
    <Card>
      <Card.Header>{episodes.name}</Card.Header>
      <Card.Meta>Air Date: {episodes.air_date}</Card.Meta>
      <Card.Description>Episode: {episodes.episode}</Card.Description>
      {console.log(episodes)}
    </Card>
  );
}

export default EpisodeCard;
