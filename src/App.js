import React from "react";
import {Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
// import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      {/* <SearchForm /> */}
      <WelcomePage />
      <Route exact path="/" component={CharacterList} />
    </main>
  );
}
