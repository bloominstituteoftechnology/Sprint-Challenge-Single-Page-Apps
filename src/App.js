import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import EpisodeList from "./components/EpisodeList.js";
import LocationList from './components/LocationsList'

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      {/* <CharacterList/> */}
      {/* <EpisodeList/> */}
      <LocationList/>
    </main>
  );
}
