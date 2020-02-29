import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
// import CharacterCard from './components/CharacterCard';
// import SearchForm from "./components/SearchForm.js";

export default function App() {

  return (
    <main style={{backgroundColor: 'lightgreen'}}>
      <Header />
      <Route exact path='/'>
        <WelcomePage/>
      </Route>

      <Route exact path='/character'>
        <CharacterList/>
      </Route>
      
      {/* <Route>
        <SearchForm/>
      </Route> */}
      {/* <Route path='/character/:id'>
        <CharacterCard/>
      </Route> */}
    </main>
  );
}
