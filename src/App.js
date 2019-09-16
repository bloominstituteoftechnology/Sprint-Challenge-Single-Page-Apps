import React from "react";
import { Route } from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterCard from "./components/CharacterCard.js";
import LocationCard from "./components/LocationCard.js";
import EpisodeCard from "./components/EpisodeCard.js";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/character/' component={CharacterCard} />
      <Route path='/location/' component={LocationCard} />
      <Route path='/episode/' component={EpisodeCard} />
    </main>
  );
}
