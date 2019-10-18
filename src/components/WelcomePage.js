import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./SearchForm";

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
          <h1>Welcome to the ultimate fan site of Pokeys Now!</h1>
          <Link to ="/CharacterList">
          <Button>Click here</Button>
          </Link>
          {/* <SearchForm/> */}
        </header>
      </MainContainer>
    </section>
  );
}
