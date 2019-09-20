import React from "react";
import Header from "./components/Header.js";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/characters" component={CharacterList}/>
      <Link to="/characters"> See all Characters</Link>
    </main>
  );
}
