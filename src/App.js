import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";

import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" render={ () => <WelcomePage /> } />
      <Route path="/character" render={(props) => <CharacterList {...props} />} />
    </main>
  );
}
