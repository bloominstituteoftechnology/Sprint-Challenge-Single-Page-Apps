import React from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom"
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/characterlist" render={props => <CharacterList {...props}/> }/>
      <Route exact path="/characterlist/:id" component={CharacterCard}/>
    </main>
  );
}
