import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import Nav from './components/Nav';
import { Route } from 'react-router-dom'

export default function App() {
  return (
    <main data-testid='app'>
      <Nav />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Header" component={Header} />
    </main>
  );
}
