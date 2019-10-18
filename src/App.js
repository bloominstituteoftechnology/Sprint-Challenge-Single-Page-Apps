import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import Welcome from "./components/WelcomePage";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={Welcome} />
      <Route path="/character-list" component={CharacterList} />
    </main>
  );
}
