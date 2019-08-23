import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage'
import LocationsList from './LocationsList'
import EpisodesList from './EpisodesList'

export default function AppRouter() {
    return <div className = "page-view bottom attached segment active tab">
        <Switch>
            <Route path ='/characters' component = {CharacterList} />
            <Route path = '/locations' component = {LocationsList} />
            <Route path = '/episodes' component = {EpisodesList} />
            <Route component = {WelcomePage} />
            <Route component = {LocationsList} />
            <Route component = {CharacterList} />
            <Route component = {EpisodesList} />
        </Switch>
    
    </div>
}