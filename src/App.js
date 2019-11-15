import React from "react";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
      <CharacterCard />
      <Route exact path="/" component={CharacterList} />
      <Route path="/components/CharacterCard" component={CharacterCard} />
    </main>
  );
}
