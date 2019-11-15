import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList'
import SearchForm from "./components/SearchForm";
import { Route, Link} from "react-router-dom";
import CharacterCard from "./components/CharacterCard.js";
import {
  NavItem,
  Nav,
  Navbar
} from "reactstrap";


export default function App() {
  return (
    <main>
      <Header />
      <Navbar color="light" light expand="md">
        <Link to="/">Home</Link>
        <Nav className="ml-auto" navbar>
          <NavItem></NavItem>
          <NavItem>
            <Link to="/character-list">Characters</Link>
          </NavItem>
        </Nav>
      </Navbar>
      
      <SearchForm/>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
      <Route path="/character/:id" component={CharacterCard} />
    </main>
  );
}
