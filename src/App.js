import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import {Route} from "react-router-dom";
import SearchForm from "./components/SearchForm.js";

export default function App() {

  return (
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage/>
      </Route>
      <Route path ='/characters'>
        <SearchForm/>
        <CharacterList/>
      </Route>
    </main>
  );
}
