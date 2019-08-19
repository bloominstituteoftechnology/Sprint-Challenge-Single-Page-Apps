import React, { useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

const Charactercard = (character) => {
  return (
  <Card>
    <Image src={character.image} alt={character.name} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{character.name}</Card.Header>
      <Card.Meta>{character.species}  {character.status} </Card.Meta>
      <Card.Description>
        {character.location}
        {character.origin}
      </Card.Description>
      <a>
        <Icon name='user' />
        {character.episode}
      </a>
    </Card.Content>
  </Card>
  );
}
export default Charactercard();
