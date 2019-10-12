import React from "react";
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import SearchForm from './components/SearchForm';




export default function App() {
  return (
    <main>
      <Header />
      <Navigation /> 
       <AppRouter />
      <SearchForm />
    </main>
  );
}
