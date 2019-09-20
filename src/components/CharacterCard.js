import React from "react";
import styled from 'styled-components';


const CardStyle = styled.span`
font-size: 0.8em;
margin: 2em;
padding-right: 2em;
width: 25em;
padding: 1em;
background-color: white;
white-space: initial;
display: inline-block;
border: 2px black solid;
border-radius: 2px;
box-shadow: 1px 2px black;
color: black;
&:hover {
    box-shadow: 0 0 2rem white;
  }
`

const Title = styled.h3`
font-weight: bold;
flex-direction: row;
justify-content: space-evenly;
`


export default function CharacterCard(props) {
  return (
    <CardStyle>
    <Title> {props.name} </Title> 
    <p>Name: {props.name}</p>
    <p>Status: {props.status}</p>
    </CardStyle>
)
}
