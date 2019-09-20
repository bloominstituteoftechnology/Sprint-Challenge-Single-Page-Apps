import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import CharacterList from "./components/CharacterList";
// import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const Links = styled(Link)`
  text-decoration: none;
`;

export default function App() {
  return (
    <main>
      <NavLinks>
        <Links>
          <Link to="/">Home Page</Link>
          <Link to="/CharacterList">Characters</Link>
        </Links>
      </NavLinks>
      <Header />

      {/* Route */}
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/CharacterList" component={CharacterList} />
      {/* <Route path="/character-list/" component={CharacterCard} /> */}
      {/* <Route path="/LocationList" component={LocationList} /> */}
    </main>
  );
}
