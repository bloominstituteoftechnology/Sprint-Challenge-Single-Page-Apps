import React from "react";
import styled from 'styled-components';


export default function CharacterCard(props) {
  
  const WrapperDiv = styled.div`
  font-size: 73px;
  color: white;
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
      <div>{props.character.name}</div>
      <div>{props.character.status}</div>
    </>
    )
  ;
}
