import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characterlist" component={CharacterList} />
    </main>
  );
}
