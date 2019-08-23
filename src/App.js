import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from '../src/components/CharacterList.js';
import LocationsList from '../src/components/LocationsList.js';
import EpisodeList from '../src/components/EpisodeList.js';
import AppRouter from './components/AppRouter.js';


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      {/* <CharacterList />
      <LocationsList />
      <EpisodeList /> */}
      <AppRouter />
    </main>
  );
}
