import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage'

const url = 'https://rickandmortyapi.com/api/character/';

export default function App() {
  const [state, setState] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get(url).then(response => {
      // Console.log(response.data.results)
      const characters = response.data.results;

      setState(characters);
    });
  }, []);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">WelcomePage</Link>
            </li>
            <li>
              <Link to="/CharacterList">Characters</Link>
            </li>
            
          </ul>
        </nav>

       <Header>
       </Header>
        <Switch>
          <Route path="/CharacterList">
            <CharacterList />
          </Route>
          
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
    // <main>
    //   <Header />
    //   <div>
    
    //     <WelcomePage />
    //     <CharacterList
    //       state={state}
    //       setState={setState}
    //       characters={characters}
    //       setCharacters={setCharacters}
    //     />
    //   </div>
    // </main>
  // );
}
