import React from "react";
import styled from "styled-components";


export default function CharacterCard(props) {
  const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lime;
    margin: 5% 20%
    border: solid 5px black;`;

  return (
    <Card>
      <h2>{props.name}</h2>
      <p>{props.species}</p>
      <p>{props.status}</p>
      <p>{props.location}</p>
    </Card>
  );
}