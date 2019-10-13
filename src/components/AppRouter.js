import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';


const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {WelcomePage} /> 
        <Route path ='/characters' component = {CharacterList} />
     </Switch>
    </div>
  );
}

export default AppRouter; 