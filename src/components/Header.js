import React from "react";
import {Link} from 'react-router-dom';
import "../index.css";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <div className="nav-links">
          <Link to="/">Home Page</Link>
          <br/>
          <Link to="/list">Characters</Link>
        </div>
      </nav>
    </header>
  );
}
