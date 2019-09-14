import React  from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import CharacterList from './components/CharacterList';
import LocationList from "./components/LocationsList.js";
import EpisodeList from './components/EpisodeList';
import WelcomePage from  './components/WelcomePage'



function App () {
    
   return (
    <main>
     <Header />
       <TabNav />
          <Route exact path='/' component={WelcomePage} />
         <Route path="/characters" component={CharacterList} />
         <Route path="/locations" component={LocationList} />
         <Route path="/episodes" component={EpisodeList} />
       
    </main>
  );
}

export default App;
// {...props } character = { character } 
// {...props } location = { location } 
// {...props } episode = { episode }

const AppContainer = styled.div`
display: flex;
flex-wrap: wrap; 
`;