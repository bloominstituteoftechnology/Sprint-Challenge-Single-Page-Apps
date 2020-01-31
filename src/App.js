import React from "react";
import Header from "./components/Header.js";
// import {BrowserRouter as Router} from 'react-router-dom';
import{Route, Link} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/OLDCharacterList'
// import SearchForm from './components/OLDSearchForm'


export default function App() {
  return (
    
    <main className ="app">
      <nav> 
        <ul className ="nav">
          
          <li>
            <Link to = "/">WELCOME</Link>           
          </li> 

          <li>
            <Link to = "/CharacterList">Character</Link>           
          </li>        
          
          {/* <li>          
          <Link to = "/SearchForm"> Search Here</Link>          
          </li> */}

        </ul>
      </nav>


      <Header />

      <Route exact path ="/">
        <WelcomePage />
      </Route>

      {/* <Route path ="/SearchForm">
      <SearchForm />
     </Route> */}

      <Route path ="/CharacterList">
        <CharacterList />
      </Route>

      
    </main>
  );
}
