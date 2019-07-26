import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';

export default function App() {
  return (
    <main>
      <Router>
        <Header />
        <TabNav />
        <AppRouter />
      </Router>
    </main>
  );
};