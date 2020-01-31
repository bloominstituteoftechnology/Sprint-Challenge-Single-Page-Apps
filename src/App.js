import React from "react";
import Header from "./components/Header.js";
import {BrowserRouter as Router} from 'react-router-dom';
import{Route, Link} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList'
import SearchForm from './components/SearchForm'


export default function App() {
  return (
    <main>
      <nav>
        <ul>
          
        <li>
            <Link to = "/">Welcome Page</Link>
           {/* <SearchForm /> */}
          </li>         
          <li>
            <Link to = "/CharacterList">Character list</Link>
           {/* <SearchForm /> */}
          </li>         
          
         
          
          <li>
          {/* <SearchForm /> */}
          <Link to = "/SearchForm"> Search Here</Link>          
          </li>

        </ul>
      </nav>


      <Header />

      <Route exact path ="/">
        <WelcomePage />
      </Route>

      <Route path ="/SearchForm">
      <SearchForm />
     </Route>

      <Route path ="/CharacterList">
        <CharacterList />
      </Route>

      
    </main>
  );
}
