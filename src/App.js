import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage/>
      </Route>

      <Route exact path='/character'>
        <CharacterList/>
      </Route>
      
      <Route path='character/:id'>
        <CharacterCard/>
      </Route>
    </main>
  );
}
