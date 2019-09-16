import React from "react";
import {Route, Link} from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import EpisodeList from "./components/EpisodeList.js";
import LocationList from './components/LocationsList'
import Welcome from './components/WelcomePage'
import './index.css'
import styled from "styled-components";

export default function App() {
  const Image = styled.img`
    width: 50%;
    margin-left: 25%;
  `
  return (
    
    <div>
      <Image src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'/>
      <header className='navigation'>
        <TabNav/>
      </header>
      <Route exact path='/' component={Welcome}/>
      <Route path='/characters' component={CharacterList}/>
      <Route path='/locations' component={LocationList}/>
      <Route path='/episodes' component={EpisodeList}/>
    </div>
    
  );
}
