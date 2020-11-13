import React from "react";
import Header from "./components/Header.js";
import Characters from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route exact path="/Characters" component={Characters} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Search" component={SearchForm} />
    </main>
  );
}
