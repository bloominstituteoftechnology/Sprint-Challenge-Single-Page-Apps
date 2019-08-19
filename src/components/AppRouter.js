import React from 'react';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList'
import { Route } from 'react-router-dom';

function AppRouter(){
    return(
        <div className="app-router">
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/locations" component={LocationsList} />
        </div>
    );
}

export default AppRouter;