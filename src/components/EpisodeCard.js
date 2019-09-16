import React from "react";
import styled from 'styled-components'





const StyledH2 = styled.h2`
width: 40%;
background-color: green;`



export default function EpisodeCard(props) {
  console.log('ECard', props)

  
  
  return(
      
    <div>
  
    <StyledH2>{props.character.name} </StyledH2>
       Date:    {props.character.air_date }
       Episode: {props.character.episode}
             

    
  
  </div>
    )
}
