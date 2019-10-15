import React from "react";
import styled from 'styled-components'

const Container = styled.div `
  width: 85vw;
  min-height: 40vh;
  max-width: 40vw;
  margin: 35px auto;
  background: #fff;
  padding: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export default function CharacterCard(props) {
  return(
    <Container>
      <h2>
        {props.name}
      </h2>
      <img src ={props.image}/>
    </Container>
  ) 
}
