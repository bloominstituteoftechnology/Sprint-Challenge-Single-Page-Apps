import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  margin: 20px;
  border: 1px solid black;
  padding: 15px;
`;

const CharacterCard = props => {
  return (
    <Cards>
      <h2> {props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>Location: {props.location}</p>
      <p>Specie: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
    </Cards>
  );
};

export default CharacterCard;
