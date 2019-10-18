import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard.js";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterCard} />
    </main>
  );
}
