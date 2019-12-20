import React from "react";
import styled from 'styled-components';

export default function WelcomePage() {

  const StyledImg = styled.img`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1.2px solid black;
  `;

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the BEST FAN SITE!</h1>
        <StyledImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}