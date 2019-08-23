import React from "react";
import LocationsList from './LocationsList.js';
import WelcomePage from './WelcomePage.js';
import CharacterList from './CharacterList.js';
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    const panes = [
        {menuItem: 'Home', render: () => <WelcomePage />},
        {menuItem: 'Locations', render: () => <LocationsList />},
        {menuItem: 'Characters', render: () => <CharacterList />},

    ]
    return(
        <Tab panes={panes}/>
    );
};

