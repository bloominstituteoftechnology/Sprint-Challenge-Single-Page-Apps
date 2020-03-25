import React from "react";
import styled from "styled-components";

const CardWrap = styled.div`
  background-color: #fff;
  border: 2px solid #99ff66;
  text-align: center;
`;
export default function CharacterCard(props) {
  return (
    <CardWrap>
      <img src={props.image} alt="rick and morty" />
      <p>Name: {props.name}</p>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Gender: {props.gender}</p>
    </CardWrap>
  );
}
