import React from "react";

//Axios Import
import Axios from 'axios'

//Components
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard'

export default function App() {

  
  return (
    <main>
      <Header />
      <CharacterCard />

    </main>
  );
}
