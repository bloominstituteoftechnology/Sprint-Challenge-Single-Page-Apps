import React from "react";
import styled from "styled-components";
const Card = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border: 3px solid black;
  color: white;
  margin: 20px auto;
  text-align: center;
`;

export default function CharacterCard(props) {
  const { name, status, species, image } = props.character;
  return (
    <Card className="character-card">
      <h2>{name}</h2>
      <div className="character-photo">
        <img src={image} alt="" />
      </div>
      <div className="status">
        Status: <em>{status}</em>
      </div>
      <div className="species">
        Species: <em>{species}</em>
      </div>
      <span>todo: character</span>
    </Card>
  );
}
