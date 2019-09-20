import React from "react";

export default function WelcomePage(props) {
  const routeToCharacters = event => {
    event.preventDefault();
    props.history.push("/character-list");
  };
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <button onClick={routeToCharacters} className="md-button shop-button">
          See Characters!
        </button>
      </header>
    </section>
  );
}
