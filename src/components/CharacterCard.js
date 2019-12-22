import React from "react";
import styled from "styled-components"


export default function CharacterCard(props) {

    const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #A8CB59;  
    // text-shadow: 4px 1px 0px limegreen;
    background-color: #18280D;
    border: 2px ridge;
    border-radius: 25%;
    box-shadow: inset 0 0 8px;
    `




    const Header = styled.h2`
    font-size: 35px;
    `


return(
  <Card>

  <Header>{props.name}</Header>
  {/* <img className="character-image" src={character.img} alt={character.name} /> */}
    <p>Species: {props.species}</p>
    <p>Status: {props.status}</p>
    <p>Location: {props.location}</p>

  </Card>

  )
}
