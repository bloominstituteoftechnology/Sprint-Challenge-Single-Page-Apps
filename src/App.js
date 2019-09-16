import React from "react";
// import TabNav from "./components/TabNav.js";
import {Route, NavLink} from 'react-router-dom'
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import LocationsList from "./components/LocationsList.js";
import WelcomePage from './components/WelcomePage'


export default function App() {
  
  return (
    <main>
      <NavLink to = '/'>Home Page</NavLink>
      <NavLink to = '/CharacterList'>Characters</NavLink>
      <NavLink to = '/LocationList'>Location</NavLink>


      <Header />
      <WelcomePage />
    
      {/* <CharacterCard />
      <CharacterList /> 
       <LocationCard />  */}
      {/* <TabNav /> */}

      <Route  exact path ='/' component={Header} />
      <Route path = '/CharacterList' component={CharacterList } />
      <Route  path ='/LocationList' component={LocationsList} />
    </main>
  );
}
