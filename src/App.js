import React from "react";

import {Route} from "react-router-dom"
import WelcomePage from '.components/WelcomePage'
import CharacterList from './components/ChracterList'
import Header from './components/Header';


export default function App() {
  return (

    <main data-testid='app'>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
