import React from "react";
import styled from 'styled-components';


export default function CharacterCard(props) {
  
  const WrapperDiv = styled.div`
  font-size: 26px;
  color: green;
  text-align:center;
  min-height: 20px;
  `;

  if (!props.character.name) { 
    console.log("loading");
    return (
      <p>filler</p>
      //{props.data.results[0].name}
    );
  }
  return (
    <>
      <WrapperDiv>{props.character.name}</WrapperDiv>
      <WrapperDiv>{props.character.species}</WrapperDiv>
      <WrapperDiv></WrapperDiv>
    </>
    )
  ;
}
