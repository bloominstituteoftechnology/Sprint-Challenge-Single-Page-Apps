import React, { useState } from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import styles from "styled-components"

export default function App() {

  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route pat="/characters" component={CharacterList} />
      {/* <Link to ="/"></Link> */}
    </main>
  );
}
