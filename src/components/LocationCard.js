import React from 'react'
import { Card, Image } from 'semantic-ui-react'
//import Axios from 'axios';




// Build card
export default function LocationCard (props) {
  
  return(

    <Card>
      
      <Image src={props.tileData.image} wrapped ui={false} />
      
      <Card.Content>
        
        <Card.Header>{props.tileData.name}</Card.Header>
        
        <Card.Meta>
        
          <span className='date'>Type: {props.tileData.type}</span>
        
        </Card.Meta>
        
        <Card.Meta>
          <span className='date'>Dimension: {props.tileData.dimension}</span>
        </Card.Meta> 
        
        <Card.Meta>

          <span className='residents'><b>{props.tileData.residents.length}</b> Residents </span>
        
        </Card.Meta>  

      </Card.Content>
    
    </Card>

  )
}