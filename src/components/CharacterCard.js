import React from 'react';import { Card, Image } from 'semantic-ui-react';
export default function CharacterCard ( props ) {

 return (
<Card className='character-card'>
    <Image src={props.picture} alt={'Drawing of Character'} />
  <Card.Content>
    <Card.Header>Name: {props.name}</Card.Header>
    <Card.Meta>Species: {props.species}</Card.Meta>
    <Card.Meta>Status: {props.status}</Card.Meta>
    <Card.Description>Origin: {props.origin}</Card.Description>
  </Card.Content>
</Card>

    

    )

}