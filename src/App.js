import React from "react";
import { Route } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";
import WelcomePage from "./components/WelcomePage.js";
// import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/characters/" exact component={CharacterList} />
      <Route path="/locations/" exact component={LocationsList} />
      <Route path="/episodes/" exact component={EpisodeList} />
      {/* <AppRouter /> */}
    </main>
  );
}
