import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import CharacterSubRoute from "./CharacterSubRoute";

const Container = styled.p`
  font-family: 'Nanum Gothic Coding';
  font-weight: 500;
  font-size: 20px;
`

export default function CharacterCard({ name }) {
  return(
    <Container>
        <Link to={`/characters/${name}`}>{name}</Link>
    </Container>
  )
}
