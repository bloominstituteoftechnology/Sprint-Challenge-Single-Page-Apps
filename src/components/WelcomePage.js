import React from "react";
import { NavLink } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <NavLink key={1} to={'/characters/'}><h2>Characters</h2></NavLink>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
