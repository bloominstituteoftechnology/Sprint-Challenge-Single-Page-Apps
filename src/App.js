import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";

import "./App.css";

export default function App() {
  // TODO: Add useState to track data from useEffect

  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route
        exact
        path="/character-list/"
        render={props => <CharacterList {...props} />}
      />
      <Route
        path="/charater-list/:id"
        render={props => <CharacterCard {...props} />}
      />
    </main>
  );
}
