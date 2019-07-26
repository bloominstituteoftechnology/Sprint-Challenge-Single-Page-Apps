import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodeList';

export default function AppRouter() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route path="/episodes" component={EpisodesList} />
        <Route path='/characters' component={CharacterList} />
        <Route path='/locations' component={LocationsList} />
      </Switch>
    </div>
  );
};
