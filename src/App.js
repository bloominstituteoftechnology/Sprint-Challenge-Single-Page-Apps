import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";

import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={CharacterList} />
    </main>
  );
}
