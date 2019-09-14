import React  from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import CharacterList from './components/CharacterList';
import LocationList from "./components/LocationsList.js";
import EpisodeList from './components/EpisodeList';



function App () {
    
   return (
    <main>
     <Header />
       <TabNav />
         <Router>
         <Route path="/characters" component={CharacterList}/>
         <Route path="/locations" component={LocationList}/>
         <Route path="/episodes" component={EpisodeList}/>
         </Router>
         
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