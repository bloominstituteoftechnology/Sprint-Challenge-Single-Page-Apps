

import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";

import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
import RickAndMortyBackground from './img/rick-and-morty-iva.jpg';

const HeaderStyle = styled.div`
background-color: #9ef6ad;

`

const NavContentStyle = styled.div`
display: flex;
justify-content: center;
text-align: justify;
margin-top: 2.5%;
`


export default function App() {
  return (
    <HeaderStyle>
    
    <main>
    <Header />
    <Route exact path="/" component={WelcomePage}/> 
    <Route path="/CharacterList" component={CharacterList}/> 
    
    <NavContentStyle>
    <div className="App">
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/characterList">Character List</Link>
        </div>
        

    </div>
    </NavContentStyle> 
    </main>
    </HeaderStyle>
  );
}