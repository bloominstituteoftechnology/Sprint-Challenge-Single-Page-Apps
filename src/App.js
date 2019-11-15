import React from "react";
import {Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />

      
      {/* <Route path="Character List" component={CharacterList} /> */}
    </main>
  );
}
