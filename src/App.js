import React from "react";
import TabNav from "./components/TabNav.js";

//import TabNav2 from './components/TabNav2';

import Header from "./components/Header.js";
import { Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
 import SearchForm from "./components/SearchForm";






export default function App() {
  return (
    <main>
      
     
      <Header/>
      <TabNav/>
      <SearchForm/>

      {/* <TabNav2/> */}

      <Route exact path="/"   component={WelcomePage}/>
      <Route path="/character" component={CharacterList}/>
      
      <Route exact path="/location" component={LocationList}/>
      <Route path="/episode" component={EpisodeList}/>
     
    </main>
  );
}
