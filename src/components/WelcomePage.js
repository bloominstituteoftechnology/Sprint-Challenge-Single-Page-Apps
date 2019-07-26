import React from 'react'

export default function WelcomePage() {
  return <section className="welcome-page">
    <header>
      <h1>Welcome to the ultimate fan site!</h1>
      <img className="main-img ui centered medium circular image" src={`https://rickandmortyapi.com/api/character/avatar/${Math.floor(Math.random() * 400) + 1}.jpeg`} alt="random rick and morty photo hey scott" />
      <h1>Refresh the page for fresh nightmare fuel.</h1>
    </header>
  </section>

}
