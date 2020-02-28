import React from "react";
import { useHistory, NavLink } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  let routeHome = () => (
    history.push('/')
  )
  
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <button onClick={routeHome}>Home</button>
      <NavLink to='/character'>
        <button>Character List</button>
      </NavLink>
    </header>
  );
}
