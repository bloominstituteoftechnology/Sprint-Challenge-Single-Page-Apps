import React from "react";
import { NavLink, Link, Route } from "react-router-dom";
import { Navbar } from "reactstrap";
import logoimg from "../img/logoimg.png";

export default function Header() {
  return (
    <header className="ui centered">
      <div className="logo-con">
        <img className="logo" src={logoimg} alt="logo" />
      </div>

      <Navbar id="navbar">
        <NavLink exact activeClassName="activeLink" to={"/"}>
          Home
        </NavLink>
        <NavLink exact activeClassName="activeLink" to={"/characters"}>
          Characters
        </NavLink>
        <NavLink exact activeClassName="activeLink" to="/locations">
          Location
        </NavLink>
        <NavLink exact activeClassName="activeLink" to="/episodes">
          Episodes
        </NavLink>
      </Navbar>
    </header>
  );
}
