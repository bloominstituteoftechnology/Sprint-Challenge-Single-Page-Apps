import React from "react";
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage"
import Episodes from "./components/Episodes";
import Location from "./components/Location";

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
            <Episodes />
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
