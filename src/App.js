import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

import { Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      <Link to='/'>Home</Link>
      <Link to='/characters'>Characters</Link>

      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters' component={CharacterList}/>
    </main>
  );
}