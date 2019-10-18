import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import Welcome from "./components/WelcomePage";


export default function App() {
  return (
    <main>
      <Header />
      <Welcome />
      <CharacterList />
    </main>
  );
}
