import React from "react";
import TabNav from "./components/TabNav.js";
import {Route} from 'react-router-dom'
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import LocationsList from "./components/LocationsList.js";
import WelcomePage from './components/WelcomePage'
import EpisodeList from './components/EpisodeList'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  
  return (
    <main>

      <Header />
      <WelcomePage />
      <TabNav/>
 
    

      <Route  exact path ='/' component={Header} />
      <Route path = '/CharacterList' component={CharacterList } />
      <Route  path ='/LocationList' component={LocationsList} />
      <Route  path ='/EpisodeList' component={EpisodeList} />
      
    </main>
  );
}
