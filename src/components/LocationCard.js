import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  margin: 20px;
  border: 1px solid black;
  padding: 15px;
`;

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Cards>
      <h2>{name}</h2>
      <p>type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Residents: {residents}</p>
    </Cards>
  );
}
