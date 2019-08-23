import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import Rounter from "./components/Rounter";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Rounter />
      <SearchForm />
    </main>
  );
}
