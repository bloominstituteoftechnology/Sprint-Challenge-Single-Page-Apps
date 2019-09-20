import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className='nav-bar'>
        <NavLink key={1} to={'/'}><h2>Home</h2></NavLink>
        <NavLink key={2} to={'/characters/'}><h2>Characters</h2></NavLink>
      </div>
    </header>
  );
}
