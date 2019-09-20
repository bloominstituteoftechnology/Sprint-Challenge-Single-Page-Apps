import React from "react";
import styled from 'styled-components';

const Card = styled.div`
color:red;
`;
export default function CharacterCard(props) {
  return (
    <Card>
        <div className="char-card">
          <h2>Characters: {props.characters}</h2>
          <p>Location: {props.location}</p>
          <p>Episodes:{props.episodes}</p>
        </div>
      </Card>
  )
};
