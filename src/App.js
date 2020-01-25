import React, {useState} from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import {Route} from 'react-router-dom'



export default function App() {
  const [chars, setChars] =useState([])
  
  return (
    <main className="App">
      <Header />

      <Route path="/" exact>
        <WelcomePage chars={chars} setChars={setChars} />
      </Route>

      <Route path="list:id">
        <CharacterList chars={chars} setChars={setChars} />
      </Route>

    </main>
  );
}
