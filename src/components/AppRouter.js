import React from 'react';
import { Route } from 'react-router-dom';

import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import WelcomePage from './WelcomePage';
import EpisodeList from './EpisodeList';

const AppRouter = () => {
    return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/locations" component={LocationsList} />
            <Route path="/episodes" component={EpisodeList} />
        </div>
    )
}

export default AppRouter;