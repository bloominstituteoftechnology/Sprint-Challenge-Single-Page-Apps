import React from 'react'
import { Card } from 'semantic-ui-react';

export default function CharacterCard (props) {
  return (

    <Card>
      <img src={props.image} />
      <h2> {props.name} </h2>
      <p> {props.species} </p>
      <p> {props.gender} </p>
      <p> {props.status} </p>
      
    </Card>
  )
}
