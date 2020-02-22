import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";
import SearchForm from "./components/SearchForm";
export default function App() {
  return (
    <main>
     
      <Header />
      
       <div className="nav-links">
        <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/Character/:id">Characters</Link>
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
