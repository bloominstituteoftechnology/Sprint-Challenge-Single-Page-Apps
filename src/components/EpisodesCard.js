import React from 'react'
import { Card } from 'semantic-ui-react'
//import Axios from 'axios'
function EpisodesCard (props) {


  return(

    <Card>
     
      <Card.Content>
        
        <Card.Header>{props.tileData.name} - {props.tileData.episode}</Card.Header>
    
        <Card.Meta>
          <div className='episodes'><b> {props.tileData.characters.length}</b>  Characters</div>
        </Card.Meta>
       
      </Card.Content>
    
    </Card>

  )
}

export default EpisodesCard;
