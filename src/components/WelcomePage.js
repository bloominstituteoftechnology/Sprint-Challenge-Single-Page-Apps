import React from "react";
import styled from "styled-components"


const Container = styled.div`
width: 50%;
margin-left: 35%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      
     <Container>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
    </Container>
      </header>
    </section>
  );
}
