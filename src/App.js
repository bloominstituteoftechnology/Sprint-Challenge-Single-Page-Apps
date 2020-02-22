import React from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import {Route} from 'react-router-dom';

export default function App() {
  return (
  <main>
    <Header/>
    <Route exact path = "/" component = {WelcomePage} />
    <Route path = "/character" component = {CharacterList} />
  </main>);
}
