import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavLink to="/"><p className="ui center">HOME</p></NavLink>
      <NavLink to="/character"><p className="ui center">CHARACTERS</p></NavLink>

    </header>
  );
}
