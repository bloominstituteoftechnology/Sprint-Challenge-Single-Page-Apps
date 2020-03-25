import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  flex-doirection: row;
  justify-content: space-evenly;
  text-decoration: none;
`;

export default function App() {
  return (
    <main>
      <Header />

      <Navigation>
        <Link to="/">Home</Link>

        <Link to="/CharacterList">Characters</Link>
      </Navigation>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/CharacterList" component={CharacterList} />
    </main>
  );
}
