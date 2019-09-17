import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

function EpisodeCard({episodes}) {
  console.log(episodes)
  const Container = styled.div`
  display:flex;
  `
  return(
    <Container>
      <Card>
        <Card.Header>{episodes.name}</Card.Header>
        <Card.Meta>Air Date: {episodes.air_date}</Card.Meta>
        <Card.Description>Episode: {episodes.episode}</Card.Description>
      </Card> 
    </Container>

  );
}

export default EpisodeCard;
