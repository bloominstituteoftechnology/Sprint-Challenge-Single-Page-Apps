import React from "react";
import { Link, Switch, Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";


const StyledNav = styled.nav`
  background: #4e534a;
  display: flex;
  justify-content: space-evenly;
  font-size: 30px;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
`;


export default function App() {
  
  return (
    
    <div className="App">
      <main>
      <Header />
      <StyledNav>
        <div className="nav-links">
          <Link className="some-link" to="/">
            Welcome
          </Link>
          <Link to="/character-list">Characters</Link>
        </div>
      </StyledNav>

      <Switch>
        <Route exact path="/">
          <WelcomePage/>
        </Route>
        
        <Route exact path="/character-list">
          <CharacterList  />
        </Route>
        
        <Route path="/character-card">
          <CharacterCard  />
        </Route>
      </Switch>
      </main>
      
    </div>
  );
}; 
 






   
      

