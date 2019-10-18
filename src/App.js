import React from "react";
//import './App.css';
//import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import WelcomePage from './components/WelcomePage';

function App() {

  return (
      <div className='App'>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/CharacterList' component={CharacterList} />
        <Route path='/CharacterCard' component={CharacterCard} />
      </div>
  );
}
export default App;