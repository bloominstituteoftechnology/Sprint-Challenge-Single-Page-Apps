import React from "react";
import { Route } from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
    </main>
  );
}
