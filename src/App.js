import React, { useState } from "react";
import Route from 'react-dom';
import Header from "./components/Header.js";
import Axios from "axios";
import CharacterList from './components/CharacterList';
import CharacterCard from "./components/CharacterCard.js";
import WelcomePage from './components/WelcomePage';
import AppRouter from './appRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm';
import styled from 'styled-components';



export default function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
      <h1 className="RM"></h1>
      <CharacterList/>
    </div>
  )
};

