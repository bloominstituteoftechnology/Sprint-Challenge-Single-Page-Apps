import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import SearchForm from "./components/SearchForm.js";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import CharacterList from './components/CharacterList.js';
import WelcomePage from "./components/WelcomePage.js";

const HeaderStyle = styled.div`
background-color: yellow;
`

export default function App() {
  return (
    <HeaderStyle>
    
    <main>
    {/* <SearchForm> */}
    <Header />
    <Route exact path="/" component={WelcomePage}/> 
    <Route path="/CharacterList" component={CharacterList}/> 
    <Route path="/SearchForm" component={SearchForm}/>  
    <Navigation />
     {/* </SearchForm> */}
    </main>
    </HeaderStyle>
  );
}
