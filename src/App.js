import React from "react";
import Header from "./components/Header.js";
import Tabs from "./components/Tabs";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <Tabs />
      <Route path ="/homepage" component={WelcomePage} />
		  <Route path ="/characters" component={CharacterList} />
      <Route path="/locations" components={LocationList} />
    </main>
  );
}
