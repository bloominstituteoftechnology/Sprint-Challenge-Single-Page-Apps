import React from 'react';
import { Route } from 'react-router-dom';

import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

const App = () => {
   return (
      <main data-testid='app'>
         <Header />
         <Route exact path='/' component={WelcomePage} />
         <Route path='/characters' component={CharacterList} />
      </main>
   )
};

export default App;
