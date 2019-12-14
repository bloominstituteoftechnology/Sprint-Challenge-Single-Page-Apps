import React from "react";
import { Route } from 'react-router-dom';
import Header  from './components/Header';
import CharacterList  from './components/CharacterList';
import CharacterCard  from './components/CharacterCard';
import WelcomePage  from './components/WelcomePage';
export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={ WelcomePage}/>
      <Route exact path="/card/:id"component={CharacterCard}/>
      <Route exact path ="/list"  component={CharacterList}/>  
    </main>
  );
}
