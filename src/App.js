import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <main>
      <Header />
      <div>
        <div>
          <SearchForm />
        </div>
        <CharacterList />
      </div>
    </main>
  );
}
