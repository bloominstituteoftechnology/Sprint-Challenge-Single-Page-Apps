import React from "react";
import Header from "./components/Header.js";
import TabNav from './components/TabNav';
import WelcomePage from "./components/WelcomePage";
import CharacterPage from './components/CharacterPage';
import LocationPage from './components/LocationPage'
import EpisodePage from './components/EpisodePage';
import { Route } from 'react-router-dom';


function App() {
  return (
    <main>
      <div className='App'>
    <Header />
      <TabNav />
       <Route exact path="/" component={WelcomePage} />
       <Route exact path="/Character" component={CharacterPage} />
       <Route path="/Location" component={LocationPage} />
       <Route path="/Episodes" component={EpisodePage} /> 
    </div>
    </main>
  );
}

export default App;