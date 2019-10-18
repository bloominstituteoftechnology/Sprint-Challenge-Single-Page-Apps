import React from "react";
import welcome from "../image/welcome.gif";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Welcome = styled.section`
background: DarkSlateGrey;
`;


export default function WelcomePage() {
  return (
    <Welcome className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src={welcome}
          alt="rick"
        />
        <Link to={'/character-list'}>View Characters</Link>
      </header>
    </Welcome>
  );
}
