import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <CharacterList />
    </main>
  );
}
