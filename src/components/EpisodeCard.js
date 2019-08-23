import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function EpisodeCard(props,{ name, type, dimension, residents }) {
  
  return(

    <Card>
    
     <Card.Content>
     <Card.Meta>{props.epid.type}</Card.Meta>
       <Card.Header>{props.epid.name}</Card.Header>
       <Card.Content>{props.epid.dimension}</Card.Content> 
       <Card.Description>{props.epid.residents}</Card.Description>
     
     </Card.Content>
     
   </Card>

  )
 
}