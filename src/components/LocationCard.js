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
        
          <div className='date'>Type: {props.tileData.type}</div>
        
        </Card.Meta>
        
        <Card.Meta>
          <div className='date'>Dimension: {props.tileData.dimension}</div>
        </Card.Meta> 
        
        <Card.Meta>

          <div className='residents'><b>{props.tileData.residents.length}</b> Residents </div>
        
        </Card.Meta>  

      </Card.Content>
    
    </Card>

  )
}