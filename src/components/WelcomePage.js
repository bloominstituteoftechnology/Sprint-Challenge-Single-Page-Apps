import React from "react";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img style = {{ marginLeft: "35%"}}
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <br/>
        <Link style = {{ marginLeft: "35%"}} to={'/characters'}>More..</Link>
      </header>
    </section>
  );
}
