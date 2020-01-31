import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route } from 'react-router-dom'
import SearchForm from "./components/SearchForm.js";


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
