import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import {BrowserRouter,Route} from "react-router-dom";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <div>
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/character-list" component={CharacterList}/>
        <Route path="/character-card" component={CharacterCard}/>
        
      </div>
    </main>
  );
}
