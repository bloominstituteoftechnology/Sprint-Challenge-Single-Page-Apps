import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Status: {props.status}</h3>
      <h4>Species: {props.species}</h4>
      <h4>Type: {props.type}</h4>
    </div>
      
  );
}
