import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList';
import { Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';





export default function App() {
  return (
    <main>
      <Header />
      
      <Route  path="/">
      <WelcomePage />
      <SearchForm />
      <CharacterList />
      </Route>
    
    
    </main>
    
  );
}
