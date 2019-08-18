import React from "react";
import { Route } from "react-router-dom";
import { Tab } from "semantic-ui-react";
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
      <AppRouter />
    </main>
  );
}
