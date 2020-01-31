import React from "react";
import Header from "./components/Header.js";
import Characters from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import SearchForm from "./components/SearchForm.js";
import LocationsList from "./components/LocationsList";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/Characters" component={Characters} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Search" component={SearchForm} />
      <Route exact path="/Locations" component={LocationsList} />
    </main>
  );
}
