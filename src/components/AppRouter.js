import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path="/episodes" component={EpisodeList} />
      <Route component={WelcomePage} />
    </Switch>
  </div>

}
