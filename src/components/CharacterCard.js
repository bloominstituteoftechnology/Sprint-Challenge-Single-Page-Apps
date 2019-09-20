import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;
const Title = styled.h2`
  margin: 0;
  padding: 1rem;
  background: #2e9fd4;
  color: white;
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.4);
`;
const Gender = styled.p`
  padding: 0.5rem 1rem;
`;
const Species = styled.p`
  padding: 0.5rem 1rem;
`;

const Imaage = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const CharacterCard = props => {
  return (
    <Cards key={props.id}>
      <Title>{props.name}</Title>
      <Imaage src={props.image}></Imaage>
      <Gender>Gender: {props.gender}</Gender>
      <Species>Species: {props.species}</Species>
    </Cards>
  );
};

export default CharacterCard;
