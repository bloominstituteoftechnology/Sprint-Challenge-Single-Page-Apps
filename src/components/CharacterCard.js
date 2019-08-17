import React from 'react'
import { Card, Image } from 'semantic-ui-react'
//import Axios from 'axios';

// Card
function CharacterCard (props) {
 
  
  return(

    <Card>
     
      <Image src={props.tileData.image} wrapped ui={false} />
     
      <Card.Content>
     
        <Card.Header>{props.tileData.name}</Card.Header>
     
        <Card.Meta>
     
          <span className='char'>{props.tileData.species} - {props.tileData.status}</span>
     
        </Card.Meta>
     
        <Card.Meta>
     
          <span className='char'>Type: {props.tileData.type}</span>
     
        </Card.Meta>
     
        <Card.Meta>
     
          <span className='char'>Origin: {props.tileData.origin.name}</span>
     
        </Card.Meta>  
     
        <Card.Meta>
     
          <span className='char'>Location: {props.tileData.location.name}</span>
     
        </Card.Meta>  

        <Card.Meta>
     
          <span className='charEpisodes'><img src='https://image.flaticon.com/icons/png/128/181/181549.png'></img>  <b>Episodes</b></span>
     
        </Card.Meta> 
     
      </Card.Content>
   
      
    </Card>

  )
}





export default CharacterCard;


