import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: cyan;
  width 50%
`

const Button = styled.button`
  margin: 10px;
  padding: 5px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <MainContainer>
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <Link to ="/CharactersList">
          <Button>Click here</Button>
          </Link>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
      </MainContainer>
    </section>
  );
}
