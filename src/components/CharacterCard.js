import React from "react";
import styled from "styled-components";

const WrapperDiv= styled.div`
  width: 40%;
  height: 30%;
  margin-left: 22%;
  border: 1.5px solid grey;
  padding: 3%;
  padding-left: 15%;
  margin-bottom:2%;
  font-family: The Wild Hammers;
  background-color: lightgrey;
  box-shadow: 5px 5px 5px black;
  `;

  const Container = styled.div`
   box-shadow: 5px 5px 5px black;
  width:73%;
  padding:2%;

  background-color:white;
   `;

export default function CharacterCard(props) {
  const characterData = props.characterData;

  return (
  <>
      {characterData.map(character => {
        return (
          <WrapperDiv className="cards">
        <Container>
          <img src={character.image} alt ="character"/>
          </Container>
          <h1>Name:{character.name}</h1>
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
        
          </WrapperDiv>
        );
       })};
    
    </>
  );
}

