import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function CharacterCard({characters}) {
  console.log(characters)
  return(
    <Card>
      <Image src={characters.image} alt={characters.name}/>
      <Card.Header>{characters.name}</Card.Header>
      <Card.Meta>Species:{characters.species} Status:{characters.status}</Card.Meta>
      <Card.Description>Location: {characters.location.name} Origin: {characters.origin.name}</Card.Description>
      {console.log(characters)}
    </Card>
  );
}

export default CharacterCard;
