import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
// import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      {/* <CharacterCard /> */}
      <LocationsList />
      {/* <AppRouter /> */}
    </main>
  );
}
