import React from "react";
import {Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import NavBar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import "./App.css";

export default function App() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <Route exact path="/">
        <WelcomePage/>
      </Route>
      <Route exact path="/characters">
         <CharacterList/>
      </Route>
      <Route exact path="/locations">
         <LocationList/>
      </Route>
    </div>
  );
}
