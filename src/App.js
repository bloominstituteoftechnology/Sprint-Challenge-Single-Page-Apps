import React, { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import {Route} from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import SearchForm from "./components/SearchForm.js";





export default function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characterlist" component={CharacterList} />
      <Route path="/searchform" component={SearchForm}/>
    </div>
  )
};

