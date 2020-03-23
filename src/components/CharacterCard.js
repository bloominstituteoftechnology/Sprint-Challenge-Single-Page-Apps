import React from "react";
import styled from 'styled-components'

const CharP = styled.p`
  border: 1px darkred solid;
  border-radius: 0.4rem;
  padding: 0.2rem;
  text-align: center;
`

export default function CharacterCard(props) {
  return <CharP>{props.name}</CharP>;
}
