import React from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";

const Header = styles.header`
display: flex;
flex-direction: column;
align-items: center;
img {  
  border-radius: 50%;
}
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to="/characters">
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Link>
      </Header>
    </section>
  );
}
