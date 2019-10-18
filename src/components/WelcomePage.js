import React from "react";
import styled from "styled-components";
import bgrnd from "../img/intergalactic.jpg";

const Img = styled.div`
 background-image: url(${bgrnd});
  background-size: cover;
  height: 50vh;
  background-position: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
          <h1>Welcome to the ultimate fan site!</h1>
        </header>
      <Img />
    </section>
  );
}
