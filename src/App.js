import React from "react";
import { Route } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import AppRouter from "./components/AppRouter.js";
import LocationsList from "./components/LocationsList.js";
import EpisodesList from "./components/EpisodesList.js";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
      <Route path="/location-list" component={LocationsList} />
      <Route path="/episode-list" component={EpisodesList} />
      <AppRouter />
    </main>
  );
}
