import React from "react";
import styled from 'styled-components'

const Card = styled.div `
display: flex;
width: 30%;
padding 1px;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
margin: 1%;
border: 3px solid red;
color: green;
`
const CharName = styled.div `
font-size: 20px;
padding-top:10px;
`


const CharInfo = styled.p `
font-size: 18px;
align-items:space-evenly;
`


export default function CharacterCard(props) {
  return (
    <Card>
      <CharName>Name: {props.character.name}</CharName>
      <CharInfo>Status: {props.character.status}</CharInfo>
      <CharInfo>Species: {props.character.species}</CharInfo>
      <CharInfo>Gender: {props.character.gender}</CharInfo>

    </Card>
  )
}
