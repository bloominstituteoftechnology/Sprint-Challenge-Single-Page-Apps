import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

//Axios Import
import Axios from "axios";

//Components
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList";

export default function App() {
  const [rmData, setrmData] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character")
      // .then(res => console.log(res.data.results))
      .then(res => setrmData(res.data.results))
      .catch(res => console.log(res));
  }, []);

  return (
    <main>
      <Header />
      <WelcomePage />
      <SearchForm />
      <Route exact path='/' render={props => <CharacterCard {...props} rmData={rmData} />} />
      <Route exact path='/:id' render={props => <CharacterList {...props} rmData={rmData} />} />
    </main>
  );
}
