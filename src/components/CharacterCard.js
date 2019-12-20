import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react'

export default function CharacterCard(props) {
  const {name, species} = props;

  // return <span>todo: character</span>;
  return (
    <Card>

<Card.Content>
  <Card.Header>{name}</Card.Header>
  <Card.Meta>
    <span className='date'>Species: {species}</span>
  </Card.Meta>
  
</Card.Content>
{/* <Card.Content extra>
  <a>
    <Icon name='user' />
    Gender: {gender}
  </a>
</Card.Content> */}
</Card>
)
  
}
