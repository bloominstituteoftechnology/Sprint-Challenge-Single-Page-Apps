import React from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";
import styled from "styled-components";

const Card = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border: 1px solid darkkhaki;
  border-radius:5px
  width:30%;
  margin-bottom: 20px;
  margin-top: 30px

`

const CharacterImage = styled.img `
width: 100%;
`

const CharacterName = styled.h1 `
  
`

const CharacterInfo = styled.p `

`

const CharacterSpecies = styled.p `

`
const CharacterGender = styled.p `
 
`

const CharacterCard = props => {
  return (
    <Card className = "card" key = {jssPluginPropsSort.id}>
      <CharacterImage src={props.image} alt="Character Image"/>
      <CharacterName className = "character-name">{props.name} </CharacterName>
      <CharacterInfo CharacterStatus = "character-status">Status: {props.status}</CharacterInfo>
      <CharacterInfo className = "character-name">Species: {props.species}</CharacterInfo>
      <CharacterInfo className = "character-gender">Sex: {props.gender}</CharacterInfo>
      {/* <CharacterInfo className = "character-location">Location: {props.location.name}</CharacterInfo> */}
    </Card>
  )
}

export default CharacterCard;
