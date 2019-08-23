import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard(props,{ name, type, dimension, residents }) {
  
  return(

    <Card>
    
     <Card.Content>
     <Card.Meta>{props.locat.type}</Card.Meta>
       <Card.Header>{props.locat.name}</Card.Header>
       <Card.Content>{props.locat.dimension}</Card.Content> 
       <Card.Description>{props.locat.residents}</Card.Description>
     
     </Card.Content>
     
   </Card>

  )
 
}