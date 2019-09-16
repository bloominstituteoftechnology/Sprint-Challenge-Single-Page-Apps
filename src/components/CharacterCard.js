import React from "react";

import styled from 'styled-components'





const StyledH2 = styled.h2`
width: 40%;
background-color: green;`



export default function CharacterCard(props) {
  console.log('CCard', props)

  
  
  return(
    <div><img src = {props.character.image} alt ={props.character.name}/>
  <StyledH2>{props.character.name} </StyledH2>
  Location: {props.character.location.name}
  Origin: {props.character.origin.name}

  
  
  </div>
    )
}
