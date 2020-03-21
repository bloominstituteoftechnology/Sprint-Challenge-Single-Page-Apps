import React from "react";
import Header from "./components/Header.js";
import LocationList from "./components/LocationsList";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <LocationList /> 
    </main>
  );
}