import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 8%, rgba(9,99,121,0.916141456582633) 29%, rgba(0,212,255,1) 52%);
  `;

const Img = styled.img`
    margin-top: 10%;
    margin-left: 15%;
    border-radius:40%;
    border: 1px solid black;
  `;

export default function WelcomePage() {

  return (
    <Page>
    <section className="welcome-page">
      <header>
        <h1 style={{color:"black"}}>Welcome to the ultimate fan site!</h1>
        <Link to="/Characters">
          <button>Characters</button>
        </Link>
        <Link to="/Search">
          <button>Search</button>
        </Link>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  </Page>
);
}
