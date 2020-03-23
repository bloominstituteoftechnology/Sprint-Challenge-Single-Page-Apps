import React, { useEffect, useState} from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm'
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

export default function App() {

  const [ characters, setCharacters ]  = useState([]) 
  const [ results, setResults ] = useState();
  const [ filteredData, updateData ] = useState([])


  const search = charSearch => {
    updateData(charSearch)

  };

useEffect(() => {
  axios
  .get(`https://rickandmortyapi.com/api/character/`)
  .then(response => {
    setCharacters(response.data.results)
  })
  .catch(err => {
    console.log(err)
  })
  }, []);
  const id = characters.id;


  return (
    <Router>
      <Header />
      <SearchForm results={results} setResults={setResults} characters={characters} search={search}/>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' render={(props) =>{return <CharacterList {...props} characters={characters} updateData={updateData} setResults={setResults} results={results}/>}} />
      <Route exact path='/characters/:id' render={(props) => {return <CharacterCard id={id} filteredData={filteredData} />}} />
    </Router>
  );
}
