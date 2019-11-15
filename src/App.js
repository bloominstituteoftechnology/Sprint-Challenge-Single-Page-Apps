import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


export default function App() {
  return (
    <main>
      <Header/>
      <div className="nav-links">
          <Link className="some-link" to="/">
            Home
          </Link>
          <Link to="/CharacterList">Characters</Link>
        </div>
        <Route  exact path="/" component={WelcomePage} />
        <Route exact path="/CharacterList" component={CharacterList} /> 


    </main>
  );
}
