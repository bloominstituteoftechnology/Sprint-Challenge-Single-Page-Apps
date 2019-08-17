import React from 'react'
//import Axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import WelcomePage from './WelcomePage';

import LocationsList from './LocationsList';

import CharacterList from './CharacterList'

import EpisodesList from './EpisodesList';


// Router 

export default function AppRouter() {

  return <div className="page-view ui bottom attached segment active tab">
    
    <Switch>
      
      <Route path='/episodes' component={EpisodesList} />

      <Route path='/characters' component={CharacterList} />
      
      <Route path='/locations' component={LocationsList} />
      
      <Route component={WelcomePage} />
    
    </Switch>
 
  </div>

}