import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import TabNav from "./components/TabNav.js";
import CharacterList from './components/CharacterList.js';
import LocationsList from './components/LocationsList.js';
import EpisodeList from './components/EpisodeList.js';
import SearchForm from './components/SearchForm.js';

/* whole page to be rendered using semantic ui per github documentation, added import of all components to be rendered
added import of route to route paths for all components */

export default function App() {
  return (
    <main>
      <Header></Header>
      <TabNav></TabNav>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path='/episodes' component={EpisodeList} />
      <Route path='/search' component={SearchForm} />
     
    </main> 
  );
};