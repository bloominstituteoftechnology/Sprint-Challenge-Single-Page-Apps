import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/character">CHARACTERS</NavLink>
    </header>
  );
}
