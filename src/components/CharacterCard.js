import React from "react";
import { Card, Icon, Image} from 'semantic-ui-react'


export default function CharacterCard({char}) {
  return (
    <Card>
      <Image src={char.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{char.name}</Card.Header>
        <Card.Meta>{char.name}</Card.Meta>
        <Card.Description>{char.location.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          episodes
        </a>
        </Card.Content>
    </Card>
  );
}
