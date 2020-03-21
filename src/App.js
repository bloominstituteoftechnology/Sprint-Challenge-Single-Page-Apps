import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList.js';
// import LocatonCard from './components/CharacterCard.js';
import SearchForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage.js';
import { Route } from 'react-router-dom';


export default function App() {
  return (
    <main data-testid='app'>
      {/* <Link to='/'></Link> */}
      <Header />
      <Route exact path='/' component={WelcomePage}></Route>
      <Route Exact path='/character/:id' component={CharacterList}></Route>
      
      {/* <LocatonCard /> */}
      <SearchForm />
    </main>
  );
}
