import React from "react";

import Header from "./components/Header.js"
import WelcomePage from "./components/WelcomePage.js"
import CharacterList from "./components/CharacterList.js"
import SearchForm from "./components/SearchForm.js"


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm/>
      <CharacterList/>
    </main>
  );
}
