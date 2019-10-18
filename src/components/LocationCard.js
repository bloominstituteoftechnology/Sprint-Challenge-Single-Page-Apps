import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: dodgerblue;
  color: white;
width: 20%;
padding: 1%;
margin: 2%;
border-radius: 5px;
box-sizing: border-box;
box-shadow: 0 0 5px 1px  black;
&:hover{box-shadow: 0 0 20px 5px  orange;}
h2 {
  font-size: 1.6rem;
  color: Black;}
h3 {
  font-size: 1.4rem;
  color: yellow;}
h4{
  font-size: 1.2rem;
}
`;

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card >
      <h2>{name}</h2>
      <h3>Type: {type}</h3>
      <h4>Dimension: {dimension}</h4>
      <h4>Residents: {residents}</h4>
    </Card>
  );
}
