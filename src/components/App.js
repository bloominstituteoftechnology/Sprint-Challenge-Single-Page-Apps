import React from "react";
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import CharacterList from "./Character/CharacterList"
import WelcomePage from "./WelcomePage"
import EpisodeList from "./Episodes/EpisodeList";
import Location from "./Location/Location";

const navStyle={display: "flex", justifyContent: "space-evenly"}
export default function App() {
  return (
    <main>
    
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>    

        <nav style={navStyle}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/episodes">Episodes</NavLink>
          <NavLink to="/location">Location</NavLink>
        </nav>
      
        <Switch>        
          <Route path="/characters">
            <CharacterList />
          </Route>
          <Route path="/episodes">
            <EpisodeList />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>  

      </header>
    </main>
  );
}
