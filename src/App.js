import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

import {Route} from "react-router-dom";
import Alert from './components/audio';



export default function App() {
  return (
    
    <div className="mine">
    
      <Header><Alert>
    <audio ref="audio_tag" src="../assets/wubba_lubba_dub_dub.mp3" onLoadStart/>
    </Alert></Header>
      <Route exact path="/"  component={WelcomePage} />
      
     
     <Route path="/characters" component={CharacterList} />
    
     
    </div>
  );
}
