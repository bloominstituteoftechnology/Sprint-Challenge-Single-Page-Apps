import React from "react";
import axios from 'axios';

import Header from "./components/Header.js";

import SearchForm from "./components/SearchForm.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <CharacterList />
      <SearchForm />
    </main>
  );
}
