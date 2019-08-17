import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/characters/">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/locations/">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/episodes/">Episodes</NavLink>
        </li>
      </ul>
    </nav>
  );
}
