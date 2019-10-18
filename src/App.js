import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard.js";
import WelcomePage from "./components/WelcomePage";
import {Route} from "react-router-dom";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' className="welcome" component={WelcomePage} />
      <Route path="/character-list/search" component={SearchForm}/>
      <Route path="/character-list" component={CharacterList} />
      
      <Route path="/character-card" component={CharacterCard} />
    </main>
  );
}
