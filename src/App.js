import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import {Route} from 'react-router-dom'
import CharacterCard from "./components/CharacterCard.js";
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <div>
      <WelcomePage exact path='/'/>

      <Route path='/characters/'>
        <Header />
        <SearchForm/>
      </Route>

      <Route exact path ='/characters/'>
        <CharacterList />
      </Route>

      <Route path='/characters/:characterID'>
        <CharacterCard></CharacterCard>
      </Route>
    </div>
   
   
  );
}
