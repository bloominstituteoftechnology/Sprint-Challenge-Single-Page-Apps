import React from "react";
import { Route, Link } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';



export default function App() {
  return (
    <main>
      <Header />
      <Link to='/CharacterList'>characters</Link>
      <Link to='/'>home</Link>
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path='/CharacterList' component={CharacterList}/>
      
      
    </main>
  );
}
