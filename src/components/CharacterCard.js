import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  margin: 20px;
  border: 1px solid black;
  padding: 15px;
`;

export default function CharacterCard(props) {
  return(
    <Cards>
      <h2> {props.name} </h2>
      <img src = {props.image} />
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
    </Cards>
  );
}
