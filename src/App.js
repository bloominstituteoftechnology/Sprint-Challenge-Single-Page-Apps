import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import {Route} from "react-router-dom";
import SearchForm from "./components/SearchForm";
import CharacterCard from "./components/CharacterCard";



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters/" component={CharacterList} />
      <SearchForm/>
      <CharacterCard />
    </main>
  );
}
