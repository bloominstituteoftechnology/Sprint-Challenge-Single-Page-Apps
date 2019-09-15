import React from "react";
/* leave welcome page as is for now, added p tag with description of page */
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <p>Search for different characters, film locations, and episodes!</p>
    </section>
  );
};
