import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import AppRouter from "./components/AppRouter.js";
import LocationCard from "./components/LocationCard";
import LocationsList from "./components/LocationsList.js";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <CharacterList />
      <AppRouter />
    </main>
  );
}
