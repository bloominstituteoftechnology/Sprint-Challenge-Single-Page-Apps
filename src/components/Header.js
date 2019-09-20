import React from "react";
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavLink key={1} to={'/'}><h3>Home</h3></NavLink>
      <NavLink key={2} to={'/characters/'}><h3>Characters</h3></NavLink>
      <NavLink key={3} to={'/search/'}><h3>Search</h3></NavLink>
    </header>
  );
}
