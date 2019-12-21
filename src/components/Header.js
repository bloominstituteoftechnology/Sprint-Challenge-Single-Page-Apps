import React from "react";
import SearchForm from "./SearchForm";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <SearchForm/>
      <Link to="/characters">Characters</Link>
    </header>
  );
}
