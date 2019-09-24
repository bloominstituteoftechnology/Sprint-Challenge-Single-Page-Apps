import React from "react";
import styled from 'styled-components';

const WelcomeStyle = styled.div`
  background-color: yellow;
  display:flex;
  justify-content: center;
`

const ImagStyle = styled.img`
display:flex;
justify-content: center;
`

 


export default function WelcomePage() {
  return (
    <WelcomeStyle>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <ImagStyle 
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </WelcomeStyle>
  );
}