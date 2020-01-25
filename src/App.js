import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import {Route} from 'react-router-dom'



export default function App() {
  const [char, setChar] =useState([])
  
  return (
    <main className="App">
      <Header />
      <Route path="/" exact>
        <WelcomePage char={char} setChar={setChar} />
      </Route>

      <Route>
        <CharacterList char={char} setChar={setChar} />
      </Route>

    </main>
  );
}
