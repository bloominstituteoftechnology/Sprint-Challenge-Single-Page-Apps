import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route, Link } from "react-router-dom";
import SearchForm from "./components/SearchForm";


function App() {
  return (
    <main>
      
      <Header />
      <SearchForm/>
      <Link to="/"/>
      <Route exact path="/" component={WelcomePage}/>
      <CharacterList/>
      <Link to="/Characters"/>
      <Route path="/Characters" component={CharacterList}/>
      
    </main>
  );
}

export default App;