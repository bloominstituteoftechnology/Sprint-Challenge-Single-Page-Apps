import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Axios from "axios";
import CharacterList from './components/CharacterList';
import CharacterCard from "./components/CharacterCard.js";
import WelcomePage from './components/WelcomePage';
import FormikSearchForm from './components/SearchForm';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CharacterList">Characters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/CharacterList" component={CharacterList} />
          <Route path="/" component={WelcomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;