// initial commit
import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import Characters from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import Search from './components/SearchForm';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={Characters} />
      <Route path="/search" component={Search} />
      
    </main>
  );
}

// Hook up the Welcome page(Home page) and a Characters page with React Router.
//  Use a styling or component library for part of or all of your application. (Pick at least 1 of: styled-components or Reactstrap).

// Fetch a list of characters from the Rick and Morty API's Characters endpoint https://rickandmortyapi.com/api/character/ and render them to the screen.
//  You must display at least one element for each character.