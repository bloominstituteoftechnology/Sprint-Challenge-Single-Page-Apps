import React from "react";
import { Card, Icon, Image, Tab } from "semantic-ui-react";
import styled from "styled-components";

function CharacterCard({characters}) {
  console.log(characters)
  const Container = styled.div`
    display:flex;
  `
  return(
    <Container>
      <Card >
        <Image src={characters.image} alt={characters.name}/>
        <Card.Header>{characters.name}</Card.Header>
        <Card.Meta>Species:{characters.species} Status:{characters.status}</Card.Meta>
          <Card.Description>Location: {characters.location.name} Origin: {characters.origin.name}</Card.Description>
          {console.log(characters)}
        </Card>
    </Container>
    
  );
}

export default CharacterCard;
