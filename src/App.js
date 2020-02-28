import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import {Route} from 'react-router-dom'
import CharacterCard from "./components/CharacterCard.js";
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <Route exact path='/'>
        <WelcomePage />
      </Route>
   
      <Route path='/characters/'>
        <Header />
        
      </Route>

      <Route exact path ='/characters/'>
        <CharacterList />
      </Route>

      <Route path='/characters/:characterID'>
        <CharacterCard/>
      </Route>
    </div>
   
   
  );
}
