import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: dodgerblue;
  color: white;
width: 20%;

padding: 1%;
margin: 1%;
border-radius: 5px;
box-sizing: border-box;
&:hover{box-shadow: 0 0 20px 1px  green;}
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

export default function CharacterCard(props) {
 return (
    <Card >
      <h2>{props.name}</h2>
      <h3>Status: {props.status}</h3>
      <h4>Species: {props.species}</h4>
      <h4>Type: {props.type}</h4>
    </Card>
 );
};
