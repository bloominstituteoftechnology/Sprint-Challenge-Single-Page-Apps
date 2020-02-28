import React from "react";
import { NavLink, useRouteMatch } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav-wrapper">      
      <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="characters">Characters</NavLink>
          <NavLink to="locations">Locations</NavLink>
      </div>
    </div>
  );
}
