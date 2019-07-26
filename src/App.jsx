import React from 'react';
import TabNav from './components/TabNav';
import Header from './components/Header';
import AppRouter from './components/AppRouter';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
    </main>
  );
}
