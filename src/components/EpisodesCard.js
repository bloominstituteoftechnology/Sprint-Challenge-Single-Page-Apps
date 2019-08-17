import React from 'react'
import { Card } from 'semantic-ui-react'
//import Axios from 'axios'
function EpisodesCard (props) {


  return(

    <Card>
     
      <Card.Content>
        
        <Card.Header><div className='episodes'>{props.tileData.name} <img src="https://png.pngtree.com/element_our/sm/20180308/sm_5aa0ff0e28a15.png"></img> {props.tileData.episode}</div></Card.Header>
    
        <Card.Meta>
          <div className='episodes'><b> {props.tileData.characters.length}</b>  Characters</div>
        </Card.Meta>
       
      </Card.Content>
    
    </Card>

  )
}

export default EpisodesCard;
