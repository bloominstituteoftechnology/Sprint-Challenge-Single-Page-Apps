import React from "react";
import styled from "styled-components";

const Cards = styled.div`
 border: 1px solid black;
 margin: 2%;
 background-color: lightblue;
 border-radius: 10px;
 padding: 3%;
`
export default function CharacterCard({ name, species, status}) {
  return (
    <Cards>
      <h3>Name:{name}</h3>
      <p>Species:{species}</p>
      <p>Status:{status}</p>
       
    </Cards>
 )}