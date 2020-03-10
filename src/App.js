import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <Route path ='/Search'><SearchForm /></Route>
      <Route exact path='/'><WelcomePage /></Route>
      <Route path = '/Characters'><CharacterList /></Route>
    </main>
  );
}
