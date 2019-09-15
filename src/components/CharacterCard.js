import React from "react";
import { Card, Image } from 'semantic-ui-react'
export default function CharacterCard(props) {
/* rendering UI using built in semantic ui card grid design and images via props */
  return(
  <Card>

    <Card.Content>
    <Card.Header>{props.name}</Card.Header>

    <Image src={props.image} wrapped ui={true} />
    
    <Card.Meta>
      <span>  {props.species} </span> 
      <span>  {props.status}  </span>
    </Card.Meta>
    
    <Card.Description>
      <span>Location: {props.location}</span>
      <span>Origin: {props.origin}</span>
    </Card.Description>
    
    </Card.Content>
  </Card>
  );
};
