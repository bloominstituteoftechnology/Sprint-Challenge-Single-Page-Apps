import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route} from "react-router-dom"
import WelcomePage from "./components/WelcomePage";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/CharacterList" component={CharacterList}/>
    </main>
  );
}


