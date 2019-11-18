import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
export default function App() {
  return (
    <main>
      <SearchForm />
      <Header />

      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      {/* <Route path="/results/:id" component={Character} /> */}
    </main>
  );
}
