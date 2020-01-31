import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <center>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <br/>
        <navStyle>
          <navLink to='/'>Home</navLink>
          <br />
          <navLink to='/CharacterList'>Character List</navLink>
        </navStyle>

        </center>
      </header>
    </section>
  );
}
