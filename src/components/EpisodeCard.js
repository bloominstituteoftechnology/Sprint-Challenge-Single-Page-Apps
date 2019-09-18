import React from "react";
import styled from 'styled-components'
import {Card} from 'react-bootstrap'




const StyledH2 = styled.h2`
width: 60%;
font-size: 24px;
font-weight: bold;
margin: 5px 0;
`

const StyledH3 = styled.h3`
width: 100%;
font-size: 1.25rem;
margin: 5px 0;
`

const StyledP = styled.p`
width: 60%;
font-size: 1.25rem;
`



export default function EpisodeCard(props) {
  console.log('ECard', props)

  
  
  return(
      
    
       <Card style={{ width: '30rem', margin: 5, borderRadius:2}}>
    <StyledH2>{props.character.name} </StyledH2>
       <StyledH3>Date:{props.character.air_date }</StyledH3> 
       <StyledP>Episode:{props.character.episode}</StyledP>
             
       </Card>
    
  
 
    )
}
