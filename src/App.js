import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";

export default function App() {
  return (
    <main>
      <Header />
      <Route
        exact
        path="/"
        render={props => {
          return <WelcomePage {...props} />;
        }}
      ></Route>
      <Route
        path="/characters"
        render={props => {
          return <CharacterList {...props} />;
        }}
      ></Route>
      <Route
        path="/locations"
        render={props => {
          return <LocationList {...props} />;
        }}
      ></Route>
      <Route
        path="/episodes"
        render={props => {
          return <EpisodeList {...props} />;
        }}
      ></Route>
    </main>
  );
}
