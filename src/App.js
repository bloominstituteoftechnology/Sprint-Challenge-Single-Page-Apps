import React from 'react';
import { Switch, Route } from "react-router-dom";
import CharacterList from './components/CharacterList.js'

import './App.css';

export default function App() {
  return <Switch>
    <Route path="/character" component={CharacterList} />
  </Switch>
}