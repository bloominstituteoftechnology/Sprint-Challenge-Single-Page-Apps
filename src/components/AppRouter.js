import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';

function AppRouter(){
    return(
        <Route path="/" component={WelcomePage} />
    );
}

export default AppRouter;