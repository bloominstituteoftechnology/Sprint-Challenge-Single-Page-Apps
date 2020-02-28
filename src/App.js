import React from "react";
import { Link, Switch, Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";


const StyledNav = styled.nav`
  background: #4e534a;
  font-size: 30px;
  padding: 5px;
  border-radius: 5px;
`;
const StyledLink = styled(Link)`
display:flex;
justify-content:space-evenly;

`;


export default function App() {
  
  return (
    
    <div className="App">
      <main>
      <Header />
      <StyledNav>
        <div className="nav-links">
          <StyledLink className="some-link" to="/">
            Welcome
          </StyledLink>
          <StyledLink to="/character-list">Characters</StyledLink>
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
 






   
      

