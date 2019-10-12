import React from "react";
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navigation from './components/Navigation.js';
// import WelcomePage from "./components/WelcomePage";
import Header from './components/Header.js';
// import CharacterList from "./components/CharacterList";
import AppRouter from './components/AppRouter.js';
import SearchForm from './components/SearchForm';




export default function App() {
  return (
    <main>
      <Header />
      <Navigation /> 
       <AppRouter />
      
      <SearchForm />
    </main>
  );
}
