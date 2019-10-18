import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: black;`

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
          <h1>Rick and Morty Kindof</h1>
          <Link to ="/CharacterList">
          <Button>Click here</Button>
          </Link>
        </header>
      </MainContainer>
    </section>
  );
}
