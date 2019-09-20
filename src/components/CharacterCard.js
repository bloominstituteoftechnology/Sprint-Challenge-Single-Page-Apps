import React from "react";
import styled from 'styled-components';


export default function CharacterCard(props) {
  
  const WrapperDiv = styled.div`
  font-size: 16px;
  color: red;
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
      <WrapperDiv>{props.character.status}</WrapperDiv>
    </>
    )
  ;
}
