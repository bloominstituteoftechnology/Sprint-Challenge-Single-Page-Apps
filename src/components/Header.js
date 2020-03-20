import React from "react";
import {Route, NavLink} from 'react-router-dom';
import CharacterList from "./CharacterList";
import WelcomePage from './WelcomePage'

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      
      <NavLink to='/'>Home</NavLink><br></br>
      <NavLink to='/characterlist'>Characters</NavLink>
      <Route exact path='/' render={props => <WelcomePage {...props}/>  }  />
      <Route path='/characterlist' render={props => <CharacterList {...props}/> } />
    </header>
  );
}
