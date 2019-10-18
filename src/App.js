import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={CharacterCard} />
    </main>
  );
}
