import React from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function App() {
  return (
    <main>
     
      <Header />
      
       <div className="nav-links">
        <nav>
        <NavItem>
        <NavLink><Link to="/">Home</Link></NavLink> 
        </NavItem>
        <NavItem>
        <NavLink><Link to="/Character/:id">Characters</Link> </NavLink>
        </NavItem>
       </nav>
        </div>
        <Route path = "/Character/:id" 
          component={CharacterList}
        render= {routeProps => {
          console.log("routeProps", routeProps);
        }}  
      />
        <Route path= "/" exact component={WelcomePage} />,
        






      

      
      
    </main>
  );
}
