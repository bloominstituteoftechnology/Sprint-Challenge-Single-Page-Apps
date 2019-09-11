import React from "react";
import LocationsList from './LocationsList.js';
import WelcomePage from './WelcomePage.js';
import CharacterList from './CharacterList.js';
import EpisodeList from './EpisodeList.js';
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    const panes = [
        {menuItem: 'Home', render: () => <WelcomePage />},
        {menuItem: 'Locations', render: () => <LocationsList />},
        {menuItem: 'Characters', render: () => <CharacterList />},
        {menuItem: 'Episodes', render: () => <EpisodeList />},

    ]
    return(
        <Tab panes={panes}/>
    );
};
