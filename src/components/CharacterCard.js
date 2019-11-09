import React from "react";
import styled from "styled-components"


export default function CharacterCard(props) {

    const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: DarkCyan;
    margin: 5% 20%
    border: solid 5px black;
    `
    const Header = styled.h2`
    font-size: 25px;
    text-shadow: 2px 2px BlueViolet;
    `


  return(
    <Card>

      <Header>{props.name}</Header>
        <p>Species: {props.species}</p>
        <p>Status: {props.status}</p>
        <p>Location: {props.location}</p>

    </Card>


  )
}
