import React from 'react'
import { Card } from 'semantic-ui-react';



export default function CharacterCard (props) {
  return (
  // <span className='character-card'>
  //   <img src={props.img} alt='character'/>
  //   <h2 className='character-name'>{props.name}</h2>
  //   <p>Status: {props.status}</p>
  //   <p>Species: {props.species}</p>
  //   <p>ID: {props.number}</p>
  // </span>
  // );
  // }


  <Card className='ui centered cards'>
    <Card.Content >
    <Card.Header>{props.name}</Card.Header>
    <img src={props.img} alt='rick and morty characters'style={{maxWidth: '240px'}} />
      <Card.Description>Status: {props.status}</Card.Description>
      <Card.Description>Species: {props.species}</Card.Description>
      <Card.Description>Gender: {props.gender}</Card.Description>
    </Card.Content>
  </Card>
  );
}