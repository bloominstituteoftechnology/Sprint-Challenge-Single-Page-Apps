import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';

import Characters from './components/CharacterList';
import WelcomePage from "./components/WelcomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={Characters} />
    </main>
  );
}
