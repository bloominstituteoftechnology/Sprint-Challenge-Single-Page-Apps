import React from "react";
import styled, { withTheme } from 'styled-components';

const divStyle = styled.div `
  background: white;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  width: 95%;
  border: 5px solid white;
  `;

  const pStyle = styled.p`
    background: white;
    color: black;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px;
    width: 95%;
    border: 5px solid white;
    border-radius: 5px;
    `;


export default function CharacterCard(props) {
  return (
    <divStyle key={props.id}>
      <div>
        <pStyle>Name: {props.name}</pStyle>
        <pStyle>Species: {props.species}</pStyle>
        <pStyle>Origin: {props.origin.name} </pStyle>
      </div>
    </divStyle>
  );
}
