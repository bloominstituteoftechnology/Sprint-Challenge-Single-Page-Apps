import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import LocationList from './LocationsList';
import EpisodesList from '.EpisodesList';
import CharacterList from './CharacterList';

export default function  Rounter() {

return (
    <div className='page-view ui botton segment active tab'>
        <Switch>
            <Route path='/characters' component={CharacterList} />
            <Route path='/episodes' component={EpisodesList} />
            <Route path='/locations' component={LocationList} />
            <Route component={WelcomePage} />
        </Switch>
    </div>
)
}