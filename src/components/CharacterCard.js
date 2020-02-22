import React from "react";
import styled from 'styled-components';

const Items = styled.p`
  color: red;

`
export default function CharacterCard(props) {

  return <Items>{props.name}</Items>;
}
