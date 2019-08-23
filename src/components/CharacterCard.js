import React from "react";
import { Card, Image } from 'semantic-ui-react'



export default function CharacterCard(props) {


  return (

    <Card>    
      
      <Image src={props.image} />

      <Card.Content>
      <Card.Header><h2> {props.name}</h2> </Card.Header>
          <Card.Description>
          <p> {props.species} </p>
          <p> {props.gender} </p>
          <p> {props.status} </p>
          </Card.Description>
      </Card.Content>    

    </Card>



  );
  
  
  
}
