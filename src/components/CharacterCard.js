import React from "react";
import { Card, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return (


<Card>
   <Image src= {props.char.image} wrapped ui={false} />
    <Card.Content>
    <Card.Meta>{props.char.gender}</Card.Meta>
      <Card.Header>{props.char.name}</Card.Header>
      <Card.Content>{props.char.species}</Card.Content> 
      <Card.Description>{props.char.status}</Card.Description>
    

      
    </Card.Content>
  </Card>


  )

  
}
