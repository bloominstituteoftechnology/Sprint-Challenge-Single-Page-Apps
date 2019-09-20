import React from "react";
import Header from "./components/Header.js";
import  WelcomePage from "./components/WelcomePage"
import { Route } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Route exact path="/" component={WelcomePage} />
      <Route  path="/characters" component={Header} />
    </main>
  );
}
