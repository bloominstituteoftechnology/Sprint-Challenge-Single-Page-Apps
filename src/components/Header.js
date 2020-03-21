import React from "react";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
//import LocationList from "./LocationsList";
import { Route, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Route exact path="/" render={props => <WelcomePage {...props} />} />
      <Route path="/characters" render={props => <CharacterList {...props} />} />
    </header>
  );
}
