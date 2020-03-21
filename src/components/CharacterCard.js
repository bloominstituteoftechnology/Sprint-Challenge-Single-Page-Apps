import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div ({
  border: '1px solid white;',
  width: '150px',
  height: '200px',
  margin: '1%',
  padding: '2%;',
  color: 'white'
});

export default function CharacterCard(props) {
  return (
      <CharacterDiv>
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
      </CharacterDiv>
  );
}
