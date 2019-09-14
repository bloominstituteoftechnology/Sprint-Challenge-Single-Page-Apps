import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodesList from './components/EpisodesList';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path='/characters' component={CharacterList}/>
      <Route exact path='/locations' component={LocationsList}/>
      <Route exact path='/episodes' component={EpisodesList}/>
    </main>
  );
}
