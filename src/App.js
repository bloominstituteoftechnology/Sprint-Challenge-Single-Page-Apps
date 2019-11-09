import React from 'react';
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";



const App = () => {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />

    </main>
  );
};

export default App;
