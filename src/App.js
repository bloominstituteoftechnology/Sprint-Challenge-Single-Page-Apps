import React from "react";
import TabNav from "./components/TabNav.js";
import {Route, Link} from 'react-router-dom'
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard'
import CharacterList from './components/CharacterList'
import LocationsList from "./components/LocationsList.js";
import WelcomePage from './components/WelcomePage'


export default function App() {
  
  return (
    <main>
      <Link to = '/'>Home Page</Link>
      <Link to = '/character-list'>Characters</Link>
      <Link to = '/location'>Location</Link>


      <Header />
      <WelcomePage />
      <CharacterCard />
      <CharacterList />
      {/* <TabNav /> */}

      <Route  path ='/' component={Header} />
      <Route   path ='/character-list/' component={CharacterCard} />
      <Route  path ='/character-list/:id' component={CharacterList} />
      {/* <Route  path ={`/character-list/:${id}`} render={ () =>  <CharacterCard /> } /> */}
      <Route  path ='/location' component={LocationsList} />
    </main>
  );
}
