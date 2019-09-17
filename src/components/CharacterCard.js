import React from "react";
import styled from 'styled-components'





const StyledH2 = styled.h2`
width: 60%;
font-size: 24px;
font-weight: bold;

margin: 5px 0;
`

const StyledH3 = styled.h3`
width: 60%;
font-size: 1.25rem;
margin: 5px 0;
`
const StyledP = styled.p`
width: 60%;
font-size: 1.25rem;
`

const StyledDiv = styled.div`
width: 55%;
padding: 10px 0;
display:flex;
flex-wrap: wrap;
flex-direction: 
border: 1px lightgrey;
`





export default function CharacterCard(props) {


  
  
  return(
    <StyledDiv>
      <img src = {props.character.image} alt ={props.character.name}/>
  <StyledH2>{props.character.name} </StyledH2>
  <StyledH3>Location: {props.character.location.name}</StyledH3>
  <StyledP>Origin: {props.character.origin.name}</StyledP>

  
  
  </StyledDiv>
    )
}
