import React from "react";
import styled from 'styled-components';

const Card = styled.div`
color:red;
`;
export default function CharacterCard(props) {
  console.log('Characters', props);
  return (
    <Card>
        <div className="char-card">
          <h2>Name: {props.name}</h2>
          <p>Status: {props.status}</p>
          <p>Species:{props.species}</p>
        </div>
      </Card>
  )
};
