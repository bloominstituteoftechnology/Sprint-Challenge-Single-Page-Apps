import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <CharacterList />
    </main>

  );
}
