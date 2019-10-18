import React from "react";
import styled from "styled-components"
  function CharacterCard(props) {

    
    const Card = styled.div `
    display: flex;
    flex-wrap: wrap;
    background-color: red;
    margin: 5% 30% 5% 30%;
    border: solid 5px black;
    `
    const Head = styled.h2 `
    font-size: 300%;
    `



  return (
    <Card>
    <Head> {props.name}</Head> 
    <p>Species: {props.species}</p>
    <p>Status: {props.status}</p>
    <p>Location: {props.location}</p>
  </Card>
  )


  
}
export default CharacterCard;