import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from "./components/CharacterCard.js";
import LocationCard from "./components/LocationCard";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterCard} />
      <Route exact path="/locations" component={LocationCard} />
    </main>
  );
}
