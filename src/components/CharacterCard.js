import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  const { character } = props;

  console.log(character);
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #a8cb59;
    text-shadow: 2px 1px 0px grey;
    background-color: #18280d;
    border: 2px ridge;
    width: 80%;
    margin: 0 auto;

    border-radius: 15%;
    box-shadow: inset 0 0 8px;
  `;

  const Header = styled.h2`
    font-size: 1.5rem;
  `;

  return (
    <Card>
      <Header>{character.name}</Header>
      <img
        className='character-image'
        src={character.image}
        alt={character.name}
      />
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
      <p>Type: {(!character.type || character.type==="") ? "None":character.type}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </Card>
  );
}
