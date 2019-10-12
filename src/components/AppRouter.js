import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';


export default function AppRouter() {
  return (
    <div>
  <Switch>
        <Route path='/characters' component={CharacterList} />
         <Route component={WelcomePage} />
    
   </Switch>
   </div>
  );
}