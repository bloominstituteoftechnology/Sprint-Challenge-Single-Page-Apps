import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import {BrowserRouter as Router, NavLink, Route}from 'react-router-dom';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <main>
    <Header/>
    <SearchForm/>
    <NavLink exact to='/'>
      Home
    </NavLink>
    <NavLink to='/characters'>
      Characterz
    </NavLink>



    <Route exact path='/' > <WelcomePage/> </Route>
    <Route path='/characters'><CharacterList/></Route>

    </main>
  );
}
