import React from "react";
// import TabNav from "./components/TabNav.js";
import {Route, NavLink} from 'react-router-dom'
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import LocationsList from "./components/LocationsList.js";
import WelcomePage from './components/WelcomePage'
import EpisodeList from './components/EpisodeList'


export default function App() {
  
  return (
    <main>
      <NavLink to = '/'>Home Page</NavLink>
      <NavLink to = '/CharacterList'>Characters</NavLink>
      <NavLink to = '/LocationList'>Location</NavLink>
      <NavLink to = '/EpisodeList'>Episodes</NavLink>


      <Header />
      <WelcomePage />
    
     
      {/* <TabNav /> */}

      <Route  exact path ='/' component={Header} />
      <Route path = '/CharacterList' component={CharacterList } />
      <Route  path ='/LocationList' component={LocationsList} />
      <Route  path ='/EpisodeList' component={EpisodeList} />
      
    </main>
  );
}
