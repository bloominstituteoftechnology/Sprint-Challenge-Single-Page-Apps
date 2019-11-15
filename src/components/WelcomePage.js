import React from "react";
import styled from "styled-components";

export default function WelcomePage() {
  return (
    <Grid>
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
    </Grid>
  );
}

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;