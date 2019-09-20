import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <CharacterCard />
      <SearchForm />
      {/* <CharacterList /> */}
      {/* <Route path="/about" component={CharacterList} /> */}
    </main>
  );
}
