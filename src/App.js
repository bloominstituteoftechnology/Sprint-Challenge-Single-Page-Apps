import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import {BrowserRouter as Router, Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage"


export default function App() {
  return (
    <main>
      <Header />
    <div>
      
      <Route exact path="/Home" component={WelcomePage}/>
      <Route  path="/components/CharacterList/" component={CharacterList}/>
    </div>
    </main>
  );
}
