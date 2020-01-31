import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: Orange;
    margin: 5% 20%
    border: solid 5px black;`;

  return (
    <Card>
      <img src={props.image} alt="character image" />
      <h2>Name: {props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </Card>
  );
}
