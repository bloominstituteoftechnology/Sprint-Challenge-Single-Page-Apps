import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  text-align: center;
  border: solid 1px black;
  color: #fff;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
`;

const CardMainContainer = styled.div`
  width: 50%;
  margin: 2rem auto;
`;

export default function CharacterCard({ name, image }) {
  // console.log("is this card?", props);

  return (
    <CardMainContainer>
      <CardContainer>
        <p>Name: {name} </p>
        {/* <p>{props.character.origin.name}</p> */}
        <img src={image} />
      </CardContainer>
    </CardMainContainer>
  );
}
