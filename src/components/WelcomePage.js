import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  const Page = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const Img = styled.img`
    margin-top: 10%;
    margin-left: 15%;
  `;

  return (
    <Page>
      <section className="welcome-page">
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <Link to="/Characters">
            <button>Characters</button>
          </Link>
          <Link to="/Search">
            <button>Search</button>
          </Link>
          <Img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
      </section>
    </Page>
  );
}
