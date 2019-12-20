import React from "react";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <SearchForm/>
      <Link to="/characters">Characters</Link>
    </header>
  );
}
