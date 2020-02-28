import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage'
import LocationList from './components/LocationsList';
import EpisodeList from './components/EpisodeList'


export default function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome Page</Link>
            </li>
            <li>
              <Link to="/CharacterList">Characters</Link>
            </li>
            <li>
              <Link to="/LocationList">Locations</Link>
            </li>
            <li>
              <Link to="/EpisodeList">Episodes</Link>
            </li>
          </ul>
        </nav>

       <Header>
       </Header>
        <Switch>
          <Route path="/CharacterList">
            <CharacterList />
          </Route>
          <Route path="/LocationList">
            <LocationList />
          </Route>
          <Route path="/EpisodeList">
            <EpisodeList />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
    
}
