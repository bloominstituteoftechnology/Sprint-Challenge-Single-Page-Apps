import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList'
import { Route, Link} from "react-router-dom";
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  return (
    <main>
      
      <Header />

      <Link to='/'>Home</Link>
      <Link to='/character-list'>Characters</Link>


      <Route exact path="/" component={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
      <Route path="/character/:id" component={CharacterCard} />

    </main>
  );
}
