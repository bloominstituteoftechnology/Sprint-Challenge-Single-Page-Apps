import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          style={{
            width: '30%'
          }}
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
