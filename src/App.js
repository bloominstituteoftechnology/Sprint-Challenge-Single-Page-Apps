import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <Route path ="/homepage" component={WelcomePage} />
		  <Route path ="/characters" component={CharacterList} />
    </main>
  );
}
