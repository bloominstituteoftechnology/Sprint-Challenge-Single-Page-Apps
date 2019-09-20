import React from "react";
import TabNav from "./components/TabNav.js";

//import TabNav2 from './components/TabNav2';

import Header from "./components/Header.js";
import { Route, NavLink } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";



// import { Tab } from 'semantic-ui-react'



// Tab Setup

// const panes = [
//   { menuItem: 'Characters', pane: 'Tab 1 Content'},
//   { menuItem: 'Locations', pane: 'Tab 2 Content' },
//   { menuItem: 'Episodes', pane: 'Tab 3 Content' },
// ]

// const TabExampleBasicAll = () => <Tab panes={panes} renderActiveOnly={false} />



export default function App() {
  return (
    <main>
      
     
      <Header/>
      <TabNav/>
      {/* <TabNav2/> */}

      <Route exact path="/"   component={WelcomePage}/>
      <Route path="/character" component={CharacterList}/>
      
      <Route exact path="/location" component={LocationList}/>
      <Route path="/episode" component={EpisodeList}/>
      {/* <TabNav /> */}
    </main>
  );
}
