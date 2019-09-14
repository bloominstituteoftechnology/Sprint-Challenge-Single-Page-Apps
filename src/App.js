import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js"
import CharacterList from "./components/CharacterList.js"
import LocationsList from "./components/LocationsList.js"
import axios from "axios"
import { Route } from 'react-router-dom'


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path ='/' component = {WelcomePage}/>
      <Route path ='/Characters' component = {CharacterList}/>
      <Route path ='/Locations' component = {LocationsList}/>
      <Route path ='/Episodes' />
    </main>
  );
}
