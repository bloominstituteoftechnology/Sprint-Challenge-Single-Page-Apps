import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {

  const Card = styled.div`
    display: flex;
    margin: 20px auto;
    width: 80%;
    border: 3px dotted gray;
    padding: 10px
  `;

  const Image = styled.img`
    width: 150px;
    height: 150px
  `;

  const Details = styled.div`
    display: flex;
    margin-left: 20%;
    flex-direction: column;
    justify-content: space-evenly;
  `;

  return (
    <div className="character-card">
      <Card>
        <Image src={props.character.image} />
        <Details>
          <div>Name: {props.character.name}</div>
          <div>Gender: {props.character.gender}</div>
          <div>Species: {props.character.species}</div>
          <div>Origin: {props.character.origin.name}</div>
          <div>Status: {props.character.status}</div>
        </Details>
      </Card>
    </div>
  )
}
