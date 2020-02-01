import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="mainNav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characterlist">Characters</Link>
          </li>
          <li>
            <Link to="/searchform">SearchForm</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
