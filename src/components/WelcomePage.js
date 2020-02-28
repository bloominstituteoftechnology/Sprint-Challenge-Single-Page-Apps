import React from "react";
import styled from "styled-components";

const bodycolor = styled.section`

background-color:black;

`
export default function WelcomePage() {
  return (
    <bodycolor className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </bodycolor>
  );
}
