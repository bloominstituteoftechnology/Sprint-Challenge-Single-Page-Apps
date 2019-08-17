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
     
          <div className='char'>{props.tileData.species} - {props.tileData.status}</div>
     
        </Card.Meta>
     
        <Card.Meta>
     
          <div className='char'>Type: {props.tileData.type}</div>
     
        </Card.Meta>
     
        <Card.Meta>
     
          <div className='char'>Origin: {props.tileData.origin.name}</div>
     
        </Card.Meta>  
     
        <Card.Meta>
     
          <div className='char'>Location: {props.tileData.location.name}</div>
     
        </Card.Meta>  

        <Card.Meta>
     
          <div className='charEpisodes'><img src='https://image.flaticon.com/icons/png/128/181/181549.png'></img>  <b>Episodes</b></div>
     
        </Card.Meta> 
     
      </Card.Content>
   
      
    </Card>

  )
}





export default CharacterCard;


