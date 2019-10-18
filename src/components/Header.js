import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 40%;
  `;

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavBar>
        <Link className="link-items" to="/">
          Home
        </Link>
        <Link className="link-items" to="/characters">
          Characters
        </Link>
        <Link className="link-items" to="/locations">
          Locations
        </Link>
      </NavBar>
    </header>
  );
}
