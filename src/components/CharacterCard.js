import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  const CharacterCards = styled.section`
    padding: 34px;
    margin: 20%;
  `;

  const Characters = styled.main``;

  return (
    <Characters>
      <CharacterCards>
        <h2>Name:{props.name}</h2>
        <p>Species:{props.species}</p>
        <p>Status:{props.status}</p>
      </CharacterCards>
    </Characters>
  );
}
