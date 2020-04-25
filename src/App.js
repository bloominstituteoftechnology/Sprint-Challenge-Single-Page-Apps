import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList"
import EpisodeList from "./components/EpisodeList"
import {Route} from "react-router-dom";
import Alert from './components/audio';



export default function App() {
  return (
    
    <main>
    
      <Header><Alert>
    <audio ref="audio_tag" src="../assets/wubba_lubba_dub_dub.mp3" onLoadStart/>
    </Alert></Header>
      <Route exact path="/"  component={WelcomePage} />
      
     
     <Route path="/characters" component={CharacterList} />
     <Route path="/locations" component={LocationList}/>
     <Route path="/episodes" component={EpisodeList}/>
     
    </main>
  );
}
