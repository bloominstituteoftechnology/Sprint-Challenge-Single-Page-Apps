import React from "react";
import styled from "styled-components";

const MainWrap = styled.div`
display: inline-grid;
    padding: 10px;
    
`

const CardContainers = styled.div`
  display:flex;
  flex-direction:column;
  flex-flow: wrap;
  width: 300px;

`

const CharacterCard = (props) => {
  return (
  <CardContainers>
  <h1>Name: {props.name}</h1>
  <p>HP: {props.hp}</p>
  <img src= {props.url} alt="pokemon"/>
  </CardContainers>
  )
}
export default CharacterCard;