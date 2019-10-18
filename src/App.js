import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route} from "react-router-dom"
import WelcomePage from "./components/WelcomePage";


export default function App() {
  return (
    <main>
      <Header />
      <CharacterList/>
      <Route path="/welcomepage/" component={WelcomePage}/>
    </main>
  );
}
