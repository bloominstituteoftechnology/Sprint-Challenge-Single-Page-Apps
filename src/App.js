import React from "react";
import { Link, Switch, Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";


export default function App() {
  
  return (
    
    <div className="App">
      <main>
      <Header />
      <nav>
        <div className="nav-links">
          <Link className="some-link" to="/">
            Welcome
          </Link>
          <Link to="/character-list">Characters</Link>
        </div>
      </nav>

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
 






   
      

