import React from "react";
import { Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Route exact path="/" render={() => <Link to="/characters">Characters</Link>} />
      <Route exact path="/characters" render={() => <Link to="/">Home</Link>} />
    </header>
  );
}
