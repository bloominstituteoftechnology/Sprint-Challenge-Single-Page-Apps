import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";




export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <CharacterList />
      <SearchForm />
      <Route exact path="/" component={WelcomePage} />
      <Router path="/characterlist" component={CharacterList} />
      <Router path="/location-list" component={LocationList} />


    </main>
  );
}
