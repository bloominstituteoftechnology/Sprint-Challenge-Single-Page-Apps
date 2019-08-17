import React from 'react';
import { Route } from 'react-router-dom';

import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import WelcomePage from './WelcomePage';

const AppRouter = () => {
    return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/locations" component={LocationsList} />
        </div>
    )
}

export default AppRouter;