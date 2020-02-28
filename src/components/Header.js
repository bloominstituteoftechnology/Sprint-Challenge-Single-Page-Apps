import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <div>
      <Link to='/'>Home</Link>
      </div>
      <div><Link to='/characters'>Character List</Link></div>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}
