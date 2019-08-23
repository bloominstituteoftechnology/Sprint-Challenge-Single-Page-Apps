import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import LocationList from "./components/LocationsList";

import {Route} from 'react-router-dom';

import { Tab } from 'semantic-ui-react'



// Tab Setup
const panes = [
  { menuItem: 'Characters', pane: 'Tab 1 Content' },
  { menuItem: 'Locations', pane: 'Tab 2 Content' },
  { menuItem: 'Episodes', pane: 'Tab 3 Content' },
]

const TabExampleBasicAll = () => <Tab panes={panes} renderActiveOnly={false} />



export default function App() {
  return (
    <main>
      
      
      <TabExampleBasicAll/>
      <Header />
      <CharacterList/>
       <CharacterCard/>
      <LocationList/>
      {/* <TabNav /> */}
    </main>
  );
}
