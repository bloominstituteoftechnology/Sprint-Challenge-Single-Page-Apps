import React from "react";
import styled from "styled-components";


const WelcomeImg = styled.img`
 align-self: center;
 border: 2px solid #99ff66; 
`;

const Header = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;

`;

export default function WelcomePage() {
  return (
    <section>
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <WelcomeImg
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
    </section>
  );
}
