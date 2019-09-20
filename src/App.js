import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";

import CharacterList from "./components/CharacterList";
// import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Link to="/">Home Page</Link>
      <Link to="/CharacterList">Characters</Link>

      <Header />
      <WelcomePage />

      {/* Route */}
      <Route exact path="/" component={Header} />
      <Route path="/CharacterList" component={CharacterList} />
      {/* <Route path="/character-list/" component={CharacterCard} /> */}
      {/* <Route path="/LocationList" component={LocationList} /> */}
    </main>
  );
}
